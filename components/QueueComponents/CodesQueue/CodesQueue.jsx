import React from 'react'
import { Container, Row, Col } from "reactstrap";

import styles from './codesQueue.module.css'

export function StructQueueCode(props) {
    const code =
`1.  typedef struct fila {
2.  	int vetor[${props.inputValue}];
3.  	int inicio;
4.  	int fim;
5.  }Fila;`

    return(
        <Container 
            className={styles.method}
            style={{ display: props.show ? "" : "none" }}
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
                        A struct que define a fila é formada por 3 características: <br />
                        o <i>vetor</i> responsável por definir a quantidade de elementos que a fila irá ter; <br />
                        o <i>início</i> responsável por informar o começo da fila; <br />
                        e o <i>fim</i>, responsável por informar o término da fila.
                    </p>
                </Col>
            </Row>
        </Container>
    )

}

export function CreateQueueCode(props) {
    const code =
`
1.  Fila * criaFila() {
2.      Fila *f = (Fila*)malloc(sizeof(Fila));
3.      f->inicio = 0;
4.      f->fim = 0;
5.      return f;
6.  }
`
    return(
        <Container 
            className={styles.method} 
            style={{ display: props.show ? "" : "none" }}
        >
            <Row>
                <Col>
                    <pre>
                        <code className={styles.codes}>
                            {code}
                        </code>
                    </pre>
                </Col>

                <Col className={styles.description2}>
                    <p className={styles.pAnimation1}>
                        Linha 2 aloca dinaminacmente o estrutura na memória;
                    </p>
                    <p className={styles.pAnimation2}>
                        Linha 3 inicializa o início da fila com 0;
                    </p>
                    <p className={styles.pAnimation3}>
                        Linha 4 inicializa o fim da fila com 0.
                    </p>
                </Col>
            </Row>
        </Container>
    )

}

export function DequeueCode(props) {
    const code =
`
1.  int desenfileirar(Fila* f) {
2.      if (!estaVazia(f))
3.          return f->vet[f->inicio++];
4.      else {
5.          printf("A fila esta vazia");
6.          return 0;
7.      }
8.  }
`
    return(
        <Container 
            className={styles.method} 
            style={{ display: props.show ? "" : "none" }}
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
                        Linha 2 verifica se a fila não está vazia;
                    </p>
                    <p className={styles.pAnimation2}>
                        Linha 3 caso não esteja retorna a retirada do elemento da fila
                        e logo em seguida é incrementado o inicio;
                    </p>
                    <p className={styles.pAnimation3}>
                        Linha 5 caso contrário, a fila estará vazia e retornará zero.
                    </p>
                </Col>
            </Row>
        </Container>
    )

}

export function EnqueueCode(props) {
    const code =
`
1.  void enfileirar(Fila* f, int valor) {
2.      if (!estaCheia(f))
3.          f->vet[f->fim++] = ${props.inputValue};
4.      else printf("A fila esta cheia");
5.  }
`
    return(
        <Container 
            className={styles.method} 
            style={{ display: props.show ? "" : "none" }}
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
                    className={styles.description2}
                    >
                    <p className={styles.pAnimation1}>
                        Linha 2 verifica se a fila não está cheia;
                    </p>
                    <p className={styles.pAnimation2}>
                        Linha 3 o valor é enfileirado e ocorre a incrementação do fim;
                    </p>
                    <p className={styles.pAnimation3}>
                        Linha 4 a fila está cheia e não é possível enfileirar.
                    </p>
                </Col>
            </Row>
        </Container>
    )

}

export function FreeQueueCode(props) {
    const code =
`
1.  void liberarFila(Fila *f) {
2.      free(f);
3.  }
`
    return(
        <Container 
            className={styles.method} 
            style={{ display: props.show ? "" : "none" }}
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
                        Linha 1 a função receberá por Parâmetro o ponteiro do tipo Fila;
                    </p>
                    <p className={styles.pAnimation2}>
                        Linha 2 a função free será responsável por liberar a memória ocupada.
                    </p>
                </Col>
            </Row>
        </Container>
    )

}

export function IsEmptyQueueCode(props) {
    const code =
`
1.  int estaVazia(Fila* f) {
2.      return (f->fim == 0);
3.  }
`
    return(
        <Container 
            className={styles.method} 
            style={{ display: props.show ? "" : "none" }}
        >
            <Row>
                <Col>
                    <pre>
                        <code className={styles.codes}>
                            {code}
                        </code>
                    </pre>
                </Col>

                <Col className={styles.description2}>
                    <p className={styles.pAnimation1}>
                        Linha 1 a função receberá por Parâmetro o ponteiro do tipo Fila;
                    </p>
                    <p className={styles.pAnimation2}>
                        Linha 2 irá retornar verdadeiro caso o fim seja igual a zero ou
                        false caso a condição não seja verdadeira.
                    </p>
                </Col>
            </Row>
        </Container>
    )

}

export function IsFullQueueCode(props) {
    const code =
`
1.  int estaCheia(Fila* f) {
2.      return (f->fim == MAX);
3.  }
`
    return(
        <Container 
            className={styles.method} 
            style={{ display: props.show ? "" : "none" }}
        >
            <Row>
                <Col>
                    <pre>
                        <code className={styles.codes}>
                            {code}
                        </code>
                    </pre>
                </Col>

                <Col className={styles.description2}>
                    <p className={styles.pAnimation1}>
                        Linha 1 a função receberá por Parâmetro o ponteiro do tipo Fila;
                    </p>
                    <p className={styles.pAnimation2}>
                        Linha 2 irá retornar verdadeiro caso o fim seja igual ao máximo ou
                        false caso a condição não seja verdadeira.
                    </p>
                </Col>
            </Row>
        </Container>
    )

}

export function PrintQueueCode(props) {
    const code =
`
1.  void imprimeFila(Fila *f) {
2.      for (int i = f->inicio; i < f->fim; i++)
3.          printf("%d ", f->vet[i]);
4.  }
`
    return(
        <Container 
            className={styles.method}
            style={{ display: props.show ? "" : "none" }}
        >
            <Row>
                <Col>
                    <pre>
                        <code className={styles.codes}>
                            {code}
                        </code>
                    </pre>
                </Col>

                <Col className={styles.description2}>
                    <p className={styles.pAnimation1}>
                        Linha 1 a função receberá por Parâmetro o ponteiro do tipo Fila;
                    </p>
                    <p className={styles.pAnimation2}>
                        Linha 2 o laço de repetição for irá percorrer a fila desde o início até
                        seu fim;
                    </p>
                    <p className={styles.pAnimation3}>
                        Linha 3 irá printar em tela cada elemento da fila em ordem.
                    </p>
                </Col>
            </Row>
        </Container>
    )

}