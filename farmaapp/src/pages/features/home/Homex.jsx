import { ButtonComponent, TextFieldComponent, BoxComponent, StackComponent, AuthTopComponent, TypographyComponent } from "../../../components";
import { useEffect, useState } from "react";
import hightlightone from '../../../assets/destaque_highlight_1.png'
import hightlighttwo from '../../../assets/destaque_highlight2.png'
import categoryMed from '../../../assets/categoria_medicamento.png'
import categorySup from '../../../assets/categoria_suplementos.png'
import categoryBel from '../../../assets/categoria_beleza.png'
import hightsem1 from '../../../assets/hightsemanal_1.png'
import hightsem2 from '../../../assets/hightsemanal_2.png'

import { useNavigate, Link } from "react-router-dom";
import { AuthTopHomeComponent } from "./components/index"

const HomeScreen = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, []);

  const dataHightLight = [
    { imageProductHighLight: hightlightone },
    { imageProductHighLight: hightlighttwo },
  ]

  const dataCategory = [
    { imageCategory: categoryMed, label: 'Medicamentos' },
    { imageCategory: categorySup, label: 'Suplementos' },
    { imageCategory: categoryBel, label: 'Beleza' }
  ]

  const dataHighLightSem = [
    {imageProductHighLight: hightsem1},
    {imageProductHighLight: hightsem2},
  ];

  return <>
    <div
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#383737'
      }}
    >
      <AuthTopHomeComponent />
      <br />
      <br />
      <TypographyComponent style={{ color: "#fff" }} variant="h1" component="h1" sx={{
        fontSize: 24,
        pl: 2
      }}>
        {"Destaques"}
      </TypographyComponent>
      <table>
        <tr>
          {dataHightLight.map((val) => {
            return (
              <td>
                <img src={val.imageProductHighLight} alt="HighLights" height={120} width={180} style={{ paddingLeft: '10px' }} />
              </td>
            )
          })}
        </tr>
      </table>
      <br />
      <TypographyComponent style={{ color: "#fff" }} variant="h1" component="h1" sx={{
        fontSize: 24,
        pl: 2
      }}>
        {"Categorias"}
      </TypographyComponent>
      <table>
        <tr>
          {dataCategory.map((val) => {
            return (
              <td>
                <img src={val.imageCategory} alt="Categories" height={100} width={100} style={{ paddingLeft: '20px' }} />
              </td>
            )
          })}
        </tr>
      </table>
      <table>
        <tr>
          {dataCategory.map((val) => {
            return (
              <td>
                <TypographyComponent style={{ color: "#fff" }} variant="h1" component="h1" sx={{
                  fontSize: 16,
                  pl: 3
                }}>
                  {val.label}
                </TypographyComponent>
              </td>
            )
          })}
        </tr>
      </table>
      <br/>
      <TypographyComponent style={{ color: "#fff" }} variant="h1" component="h1" sx={{
        fontSize: 24,
        pl: 2
      }}>
        {"Destaques da semana"}
      </TypographyComponent>
      <table>
        <tr>
          {dataHighLightSem.map((val) => {
            return (
              <td>
                <img src={val.imageProductHighLight} alt="HighLights" height={200} width={150} style={{ paddingLeft: '12px' }} />
              </td>
            )
          })}
        </tr>
      </table>

    </div>


  </>
}

export default HomeScreen;