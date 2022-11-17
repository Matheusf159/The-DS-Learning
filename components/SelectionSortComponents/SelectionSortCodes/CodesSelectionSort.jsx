import React from 'react'
import { Container, Row, Col } from "reactstrap";

import styles from './codesSelectionSort.module.css'

export function SelectionSortCode(props) {
    const code =
`
1. void selection_sort(int *v, int j) {
2.      int aux, prev, less, i;
3.      for(i = 0; i < j-1; i++) {
4.          less = i;
5.          for(aux=i+1; aux<j; aux++) {
6.              if(v[aux] < v[less]) {
7.                  less = aux;
8.              }
9.          }
10.         if(less != i) {
11.             prev = v[i];
12.             v[i] = v[less];
13.             v[less] = prev;
14.         }
15.     } 
16.  }`

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
                    className={styles.description}
                >
                    <p className={styles.pAnimation1}>
                        Linha 2 são criadas variáveis sendo elas: <i>aux</i> para auxílio da troca;
                        <i>prev</i> que irá receber o valor anterior; <i>less</i> responsável por armazenar
                        o menor elemento encontrado e <i>i</i> servindo como contador;
                    </p>
                    <p className={styles.pAnimation2}>
                        Linha 3 ocorre o primeiro laço de repetição que vai do início até o tamanho do vetor menos 1 (j-1);
                        e com isso a variável less irá receber o valor de i que inicalmente é zero;
                    </p>
                    <p className={styles.pAnimation3}>
                        Linha 5 ocorre o segundo laço de repetição que vai do segundo elemento do vetor até seu final, esse laço é
                        responsável pela comparação de um elemento com os próximos;
                    </p>
                    <p className={styles.pAnimation4}>
                        linha 6 condição onde verifica se o próximo elemento e menor que o anterior; <br />
                        linha 7 caso verdadeiro, quer dizer que há um novo menor elemento e less irá receber ele como valor;
                    </p>
                    <p className={styles.pAnimation5}>
                        linha 10 caso a variável less for diferente da variável i, ocorre a seguinte troca:
                    </p>
                    <p className={styles.pAnimation6}>
                        linha 11 prev irá receber o valor que está na posição i no vetor v; <br />
                        linha 12 o vetor na posição i irá receber o valor menor; <br />
                        linha 13 o antigo menor valor vai recever o valor da variável prev.
                    </p>
                </Col>
            </Row>
        </Container>
    )

}