import React from 'react'
import { Container, Row, Col } from "reactstrap";

import styles from './codesStack.module.css'

export function CreateStackCode(props) {
    const code = 
`
1.  Pilha* criarPilha(){
2.      Pilha* p = (Pilha*);
3.      malloc(sizeof(Pilha));
4.      p -> topo = 0;
5.      return p;
6.  }`

    return (
        <Container 
            className={styles.method}
            style={{display: props.show ? "": "none"}}
        >
            <Row>
                <Col>
                    <pre>
                        <code className={styles.codes}>
                            {code}
                        </code>
                    </pre>
                </Col>

                <Col className={styles.description}>
                    <p className={styles.pAnimation1}>
                        Linha 2 e 3 aloca dinaminacmente a estrutura na memória;
                    </p>
                    <p className={styles.pAnimation2}>
                        Linha 4 inicializa o topo do vetor da pilha;
                    </p>
                    <p className={styles.pAnimation3}>
                        Linha 5 retorna o ponteira da estrutura criada.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export function FreeStackCode(props) {
    const code = 
`
1.  void liberar_pilha(Pilha *p) {
2.      free(p);
3.  }
`

    return (
        <Container 
            style={{display: props.show ? "": "none"}} 
            className={styles.method}
        >
            <Row>
                <Col>
                    <pre>
                        <code className={styles.codes}>
                            {code}
                        </code>
                    </pre>
                </Col>

                <Col className={styles.description}>
                    <p className={styles.pAnimation1}>
                        Linha 1 A função receberá por Parâmetro o ponteiro do tipo Pilha;
                    </p>
                    <p className={styles.pAnimation2}>
                        Linha 2 A função free será responsável por liberar a memória ocupada.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export function IsEmptyStackCode(props) {
    const code = 
`
1.  int estar_vazia(Pilha *P) {
2.      if(p->top == 0)
3.          return 1;
4.      else
5.          return 0;
6.  }`

    return (
        <Container 
            className={styles.method} 
            style={{display: props.show ? "": "none"}}
        >
            <Row>
                <Col>
                    <pre>
                        <code className={styles.codes}>
                            {code}
                        </code>
                    </pre>
                </Col>

                <Col className={styles.description}>
                    <p className={styles.pAnimation1}>
                        Linha 1 A função receberá por Parâmetro o ponteiro do tipo Pilha;
                    </p>
                    <p className={styles.pAnimation2}>
                        Linha 2 A função verifica se o topo é igual a zero. Caso verdadeiro
                        a pilha estar vazia, e a função retorna verdadeira;
                    </p>
                    <p className={styles.pAnimation3}>
                        Linha 4 e 5 Caso contrário, a função retornará falsa, pois ainda há elementos
                        na pilha.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export function IsFullStackCode(props) {
    const code = 
`
1.  int estar_cheia(Pilha *p) {
2.      if(p->top == ${props.fullValue})
3.          return 1;
4.      else
5.          return 0;
6.  }`

    return (
        <Container 
            className={styles.method}
            style={{display: props.show ? "": "none"}}
        >
            <Row>
                <Col>
                    <pre>
                        <code className={styles.codes}>
                            {code}
                        </code>
                    </pre>
                </Col>

                <Col>
                <p className={styles.pAnimation1}>
                    Linha 1 a função receberá por Parâmetro o ponteiro do tipo Pilha;
                </p>
                <p className={styles.pAnimation2}>
                    Linha 2 a função função verifica se o topo é igual ao tamanho do vetor; <br />
                    Caso verdadeiro a pilha estar cheia, e a função retorna verdadeira;
                </p>
                <p className={styles.pAnimation3}>
                    Linha 4 e 5 caso contrário, a função retornará falsa, pois ainda há
                    espaço sobrando para novos elementos.
                </p>
                </Col>
            </Row>
        </Container>
    )
}

export function PopStackCode(props) {
    const code = 
`
1.  int pop(Pilha *p, int *v) {
2.      if(!estar_vazia(p)) {
3.          *v = p->vetor[--p->top];
4.          return 1;
5.      }
6.      return 0;
7.  }
`

    return (
        <Container 
            className={styles.method}
            style={{display: props.show ? "": "none"}}
        >
            <Row>
                <Col>
                    <pre>
                        <code className={styles.codes}>
                            {code}
                        </code>
                    </pre>
                </Col>
                
                <Col
                    style={{display: props.showSteps ? "" : "none"}}
                    className={styles.description}
                >
                    <p className={styles.pAnimation1}>
                        Linha 1 A função receberá por Parâmetro o ponteiro do tipo Pilha
                        e um ponteiro para uma variável inteira;
                    </p>
                    <p className={styles.pAnimation2}>
                        Linha 2 A função verifica se a pilha não estar vazia. Caso não esteja,
                        ocorrerá o processo de desempilhamento;
                    </p>
                    <p className={styles.pAnimation3}>
                        Linha 3 Ocorre o processo de desempilhamento, onde o elemento
                        da posição logo abaixo do vetor é retirado e o valor do topo é
                        decrementado.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export function PushStackCode(props) {
    const code = 
`
1. int pilha_push(Pilha *p, float v){
2.    if(!esta_cheia(p)){
3.       p->vetor[p->top++] = ${props.inputValue};
4.       return 1;
5.    }
6.    return 0;
7. }`

    return (
        <Container
            className={styles.method}
            style={{display: props.show ? "": "none"}}
        >
            <Row>
                <Col>
                    <pre>
                        <code className={styles.codes}>
                            {code}
                        </code>
                    </pre>
                </Col>

                <Col 
                    style={{display: props.showSteps ? "" : "none"}}
                    className={styles.description}
                >
                    <p className={styles.pAnimation1}>
                        Linha 1 A função receberá por Parâmetro o ponteiro do tipo Pilha
                        e o valor a ser empilhado;
                    </p>
                    <p className={styles.pAnimation2}>
                        Linha 2 A função verifica se a pilha estar cheia. Caso não, ocorrerá
                        o empilhamento do novo elemento na pilha;
                    </p>
                    <p className={styles.pAnimation3}>
                        Linha 3 Irá ser inserido o elemento na posição indicada pelo topo
                        e logo em seguida o valor do topo será incrementado.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export function StructStackCode(props) {
    const code = 
`1.  typedef struct pilha{
2.      int top;
3.      int vetor[${props.inputValue}];
4.  }Pilha;`   

    return (
        <Container 
            className={styles.method}
            style={{display: props.show ? "": "none"}}
        >
            <Row>
                <Col>
                    <pre>
                        <code className={styles.codes}>
                            {code}
                        </code>
                    </pre>
                </Col>

                <Col>
                    <p className={styles.pAnimation1}>
                        A struct que define a fila é formada por 2 características: 
                    </p>
                    <p className={styles.pAnimation1}>
                        o <i>Topo</i> responsável por informar o elemento que está acima na pilha; 
                    </p>
                    <p className={styles.pAnimation1}>
                        o <i>Vetor</i> responsável por informar a quantidade máxima que a pilha irá ter.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export function TopStackCode(props) {
    const code = 
`
1.  int top(Pilha *p) {
2.      if(!esta_vazia(p))
3.          return p->vetor[p->top-1];
4.  }`

    return (
        <Container 
            className={styles.method}
            style={{display: props.show ? "": "none"}}
        >
            <Row>
                <Col>
                    <pre>
                        <code className={styles.codes}>
                            {code}
                        </code>
                    </pre>
                </Col>

                <Col className={styles.description}>
                    <p className={styles.pAnimation1}>
                        Linha 1 A função receberá por Parâmetro o ponteiro do tipo Pilha;
                    </p>
                    <p className={styles.pAnimation2}>
                        Linha 2 A função verifica se a pilha não estar vazia. Caso não esteja,
                        então a pilha tem um topo maior do que zero;
                    </p>
                    <p className={styles.pAnimation3}>
                        Linha 3 O ponteiro irá apontar para o topo da pilha sem que ocorra
                        o desempilhamento.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}