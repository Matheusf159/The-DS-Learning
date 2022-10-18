import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import NavStructMenu from "../../components/NavStructMenu";
import { Container, Row, Col } from "reactstrap";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { methods } from "../../components/LinkedListComponents/methods";

export default function LinkedList() {
  return (
    <section>
      <Container>
        <Row className="align-items-center mt-3">
          <Col lg={12} className>
            <div>
              <h2 className="mb-4 font-weight-normal line-height-1_4">
                Definição
              </h2>
              <p>
                As pilhas e filas possuem características comuns, possuindo regras para acessar os dados 
                e suas operações que são de natureza destrutivas. Além disso, ambas utilizam uma região 
                contínua da memória, diferentemente das listas que se comportam de uma maneira randômica (SHILDT, 1996). 
                Portanto, como os elementos não estarão de forma contínua na memória, precisamos guardar seu encadeamento 
                para percorrê-la (CELES et al., 2004).
              </p>

              <p>
                Neste caso ela é singularmente encadeada, o que significa que ela contém um elo com o próximo elemento(SCHILDT, 1996).
                Suas funções de inserção e remoção são especiais. A função de inserção de um elemento na lista, usando o método de inserir no 
                início, funciona da seguinte maneira: o ponteiro que representa a lista deve ser atualizado, pois a lista irá ser representada 
                pelo novo elemento (nó) que, depois de alocado, aponta para o nó que anteriormente era o primeiro da lista, que agora passará a 
                ser o segundo elemento. A função de remoção de uma lista é mais complexa, se o elemento for retirado do início da lista, o nó que 
                faz referência a lista será o segundo elemento, caso o elemento esteja no meio, o nó anterior a ele deve apontar para seu nó seguinte 
                (CELES et al., 2004).
              </p>

              <p>
                Logo abaixo, estar a struct que forma uma pilha:  
              </p>
            </div>
          </Col>

          <Row>
            <Col lg={4}>
                
            </Col>

            <Col>
                
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
}

LinkedList.getLayout = function getLayout(page) {
  return (
    <Layout pageTitle="DS-Learning | Lista Encadeada">
      <Sidebar />
      <section>
        <NavStructMenu
          structName="LISTA ENCADEADA"
          iconName={faEllipsis}
          linkStruct="/linkedList"
          linkVisualization="/linkedList/visualization"
          linkExercicio="/linkedList/exercices"
          methods={methods}
        />
        {page}
      </section>
    </Layout>
  );
};
