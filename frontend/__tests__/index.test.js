// __tests__/index.test.jsx
import React from 'react'
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from '@testing-library/react'
import Card from '../components/Card'
import Header from '../components/Header'
import filters from '../components/Filters'
const { CamerasFilter } = filters

const dogImage = "https://images.dog.ceo/breeds/puggle/IMG_081858.jpg";

describe('NASA photos App', () => {
  let propsMock;
  let getPicturesByConfig;

  beforeEach(() => {
    getPicturesByConfig = jest.fn()
    propsMock = {
      id: 102693,
      camera: {
        fullName: 'Front Hazard Avoidance Camera',
        id: 'Front Hazard Avoidance Camera',
        name: 'FHAZ',
        roverId: 5
      },
      imgSrc: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
      earthDate: '2015-05-30',
      roverData: {
        id: 5,
        landingDate: '2012-08-06',
        launchDate: '2011-11-26',
        name: 'Curiosity',
        status: null
      }
    }
  })

  test('Should render Header', async () => {
    const { container, queryByText } = render(
      <Header/>
    )
    expect(container).toMatchSnapshot()
    queryByText('Welcome to NASA PICS!')
  });

  test('Should render Card', async () => {
    const { container, getByText } = render(
      <Card picture={propsMock} />
    )
    expect(container).toMatchSnapshot()
    getByText('Front Hazard Avoidance Camera')
  });

  test('Should render CamerasFilter', async () => {
    const { container, getByText } = render(
      <CamerasFilter getPicturesByConfig={getPicturesByConfig} />
    )
    expect(container).toMatchSnapshot()
    getByText('Select by Camera')

    const fhazButton = getByText('FHAZ')
    fireEvent.click(fhazButton)

    expect(getPicturesByConfig).toHaveBeenCalled()
  });
})
