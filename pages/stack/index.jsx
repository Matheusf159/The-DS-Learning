import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import NavStructMenu from "../../components/NavStructMenu";
import { Container, Row, Col } from "reactstrap";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { methods } from "../../../components/stacksComponents/methods";
import { StructStackCode } from '../../components/StacksComponents/CodesStack/CodesStack'

export default function Stack() {
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
                A pilha é uma estrutura simples, e uma das mais utilizadas na
                programação. Sua ideia principal é que todo acesso seja feito
                pelo topo. Portanto, ela segue a metodologia de LIFO (Last in,
                First out), ou seja, cada elemento inserido na pilha irá ser
                introduzido no topo dela, e os elementos só poderão ser
                retirados na ordem inversa em que foram inseridos, aplicando a
                regra do último a entrar ser o primeiro a sair.
              </p>

              <p>
                Esta estrutura apresenta duas operações básicas, são elas a
                operação de empilhar um novo elemento inserindo-o no topo da
                pilha conhecida como push, e a operação de desempilhar,
                removendo o elemento do topo, conhecida como pop. Assim como, funções de
                verificação de pilha cheia e vazia, de liberar a pilha e verificar seu topo.
              </p>

              <p>
                Logo abaixo, estar a struct que forma uma pilha:  
              </p>
            </div>
          </Col>

          <Row>
            <Col lg={4}>
                <StructStackCode show={true} inputValue="MAX" />
            </Col>

            <Col>
                <p>
                    A struct que define a fila é formada por 2 características: <br />
                    o <strong>Topo</strong> responsável por informar o elemento que está acima na pilha; <br />
                    o <strong>Vetor</strong> responsável por informar a quantidade máxima que a pilha irá ter. <br />
                </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
}

Stack.getLayout = function getLayout(page) {
  return (
    <Layout pageTitle="DS-Learning | Pilha">
      <Sidebar />
      <section>
        <NavStructMenu
          structName="PILHA"
          iconName={faLayerGroup}
          linkStruct="/stack"
          linkVisualization="/stack/visualization"
          linkExercicio="/stack/exercicio"
          methods={methods}
        />
        {page}
      </section>
    </Layout>
  );
};
