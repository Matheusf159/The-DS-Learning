import React from 'react'
import { Container, Row, Col } from "reactstrap";

import styles from './codesLinkedList.module.css'

export function StructLinkedListCode(props) {
    const code = 
`
1. typedef struct node {
2.      int info;
3.      struct node *next;
4. } Node;`

    return (
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
                        <i>info:</i> responsável por armazenar a informação do elemento; <br />
                        <i>*next:</i> ponteiro responsável por apontar para o próximo elemento.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export function ListLinkedListCode(props) {
    const code = 
`
1. typedef struct list {
2.      Node *head;
3.      int len;
4. } List;`

    return (
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
                        <i>*head:</i> ponteiro responsável por para elemento inicial da lista; <br />
                        <i>len:</i> responsável por indicar o tamanho da lista.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export function CreateLinkedListCode(props) {
    const code = 
`
1. List* create_list() {
2.      List *list = (List*)malloc(sizeof(List));
3.      list->head = NULL;
4.      list->len = 0;
5.      return list;
6.}`

    return (
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
                        linha 2 responsável por alocar a lista to tipo List na memória;
                    </p>
                    <p className={styles.pAnimation1}>
                        linha 3 irá iniciar apontando início da lista para NULL;
                    </p>
                    <p className={styles.pAnimation1}>
                        linha 4 irá iniciar o tamanho da lista como 0.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export function InsertBeginCode(props) {
    const code = 
`
1. void insert_begin(List *L, int v) {
2.      Node *new = (Nodo*) malloc(sizeof(Node));
3.      L->len++;
4.      new->info = v;
5.      new->next = L->head;
6.      L->head = new;
7.}`

    return (
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
                        linha 2 responsável por alocar um novo elemento da lista na memória;
                    </p>
                    <p className={styles.pAnimation2}> 
                        linha 3 responsável por incrementar o tamanho da lista;
                    </p>
                    <p className={styles.pAnimation3}>
                        linha 4 a informação do novo elemento irá receber o valor passado;
                    </p>
                    <p className={styles.pAnimation4}>
                        linha 5  ponteiro próximo do novo elemento irá apontar para o início da lista;
                    </p>
                    <p className={styles.pAnimation5}>
                        linha 6 por fim o início da lista irá apontar para o novo elemento.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export function InsertEndCode(props) {
    const code = 
`
1. void insert_end(List *L, int v) {
2.      Node *new = (Node*)malloc(sizeof(Node));
3.      new->info = v;
4.      L->len++;
5.      new->next = NULL;
6.      if(is_empty(L)) {
7.          L->head = new;
8       } else {
9.          Node *aux;
10.         for(Node *p=L>head; p!=NULL; p=p->next) {
11.             aux = p;
12.         }
13.         aux->next = new;
14.     }
15. }`

    return (
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
                        linha 2 responsável por alocar um novo elemento da lista na memória; <br />
                        linha 3 a informação do novo elemento irá receber o valor passado;
                    </p>
                    <p className={styles.pAnimation2}>
                        linha 4 responsável por incrementar o tamanho da lista; <br />
                        linha 5  ponteiro próximo do novo elemento irá apontar para NULL pois o novo
                        elemento será o último;
                    </p>
                    <p className={styles.pAnimation3}>
                        linha 6 irá acontecer uma verificação se a lista está vazia; <br />
                        lista 7 se a lista estiver vazia o inicio da lista será o novo
                        elemento;
                    </p>
                    <p className={styles.pAnimation4}>
                        caso a lista não estiver vazia, irá ser necessário percorrer a lista até
                        o seu final; <br />
                        linha 9 um elemeno do tipo Node para fazer a inserção do novo elemento;
                    </p>
                    <p className={styles.pAnimation5}>
                        linha 10 um laço irá ser necessário para percorrer a lista até o seu final; <br />
                        para interação do laço um elemento p do tipo Node será criado recebendo o início da
                        lista;
                    </p>
                    <p className={styles.pAnimation6}>
                        linha 11 o elemento aux irá receber o p que agora é o último elemento da lista; <br />
                        linha 13 aux agora sendo o último elemento, irá apontar para o novo elemento que será 
                        inserido.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export function RemoveBeginCode(props) {
    const code = 
`
1. void removeBegin(List *L) {
2.      if(is_empty(L)) {
3.          printf("A lista esta vazia!);
4.          return NULL;
5.      } else {
6.          Node *aux = L->head;
7.          L->head = aux->next;
8.      }
9. }`

    return (
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
                        linha 2 verifica se a lista está vazia, caso esteja não tem elemento para
                        remover e função irá retornar NULL;
                    </p>
                    <p className={styles.pAnimation2}>
                        caso contrário irá acontecer a remoção do início da lista; <br />
                        linha 6 um elemento aux do tipo Node irá ser criado recebendo o início da lista;
                    </p>
                    <p className={styles.pAnimation3}>
                        linha 7 o início da lista passa a apontar para o próximo elemento de aux,
                        ou seja o segundo elemento da lista passa a ser o primeiro.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export function RemoveEndCode(props) {
    const code = 
`
1. void removeEnd(List *L) {
2.      if(is_empty(L)) {
3.          printf("A lista esta vazia!");
4.          return NULL;
5.      } else {
6.          Nodo *last = L->head->next; *aux = L->head;
7.          while(last->next!=NULL) {
8.              aux = last;
9.              last = last->next;
10.         }
11.         aux->next = NULL;
12.     }
13. }`

    return (
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
                        linha 2 verifica se a lista está vazia, caso esteja não tem elemento para
                        remover e função irá retornar NULL; <br />
                        caso contrário irá acontecer a remoção do início da lista;
                    </p>
                    <p className={styles.pAnimation2}>
                        linha 6 dois elementos do tipo Node irá ser criado: <i>last</i> recebendo o próximo elemento do
                        início da lista este será responsável por armazenar o último elemento da lista; e <i>aux</i>
                        que irá receber o elemento inicial da lista e será responsável por ser o penúltimo elemento da lista;
                    </p>
                    <p className={styles.pAnimation1}>
                        logo em seguida irá ocorrer um laço para percorrer a lista até seu final, enquanto isso: 
                        aux irá receber o elemento last last irá receber seu próximo elemento para que a lista seja percorrida
                    </p>
                    <p className={styles.pAnimation1}>
                        linha 11 no final, aux será o penúltimo elemento da lista e seu ponteiro próximo irá apontar 
                        para NULL, se tornando assim o último elemento da lista.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export function IsEmptyCode(props) {
    const code = 
`
1. int is_empty(List *L) {
2.      return (L->head == NULL);
3. }`

    return (
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
                        linha 2 retorna true caso o ínicio da lista for igual a NULL e caso não seja
                        irá retornar false.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export function ListPrintCode(props) {
    const code = 
`
1. void list_print(List * L) {
2.      for(Node *p=L->head; p!=NULL; p=p->next) {
3.          printf("% ", p->info);
4.      }
5.      printf("\n");
6. }`

    return (
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
                        linha 2 o laço for irá percorrer a lista sendo p, elemento do tipo Node
                        será responsável pela interação;
                    </p>
                    <p className={styles.pAnimation2}>
                        linha 3 para cada elemento p,  será printado a informação do elemento contido nele.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
 
export function SearchNodeCode(props) {
    const code = 
`
1. Node *search_node(List *L, int v) {
2.      for(Node *p=L->head; p!=NULL; p=p->next)
3.          if(p->info==v)
4.              return p;
5.      return NULL;
6.}`

    return (
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
                        linha 2 o laço for irá percorrer a lista sendo p, elemento do tipo Node
                        será responsável pela interação;
                    </p>
                    <p className={styles.pAnimation2}>
                        linha 3 enquanto a lista é percorrida ocorre a verificação se a informação do elemento
                        p é igual ao elemento procurado;
                    </p>
                    <p className={styles.pAnimation3}>
                        linha 4 caso o valor seja encontrado o elemento p é retornado; <br />
                        linha 5 caso contrário o elemento não está na lista e é retornado NULL.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
export function FreeLinkedListCode(props) {
    const code = 
`
1. void free_list(List *L) {
2.      Node *p, *prev;
3.      p = L->head;
4.      while(p!=NULL) {
5.          prev = p;
6.          p = p->next;
7.          free(prev);
8.      }
9.      free(L);
10. }`

    return (
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
                        linha 2 é criado dois elementos do tipo Node: <i>p</i> recebendo o elemento inicial e
                        responsvável por percorrer a lista; <i>prev</i> responsável por armazenar o elemento anterior a p
                        para não perder a memória da lista armazenada;
                    </p>
                    <p className={styles.pAnimation2}>
                        enquanto se percorre a lista: <br />
                        a seguinte ordem deve ser seguida para que ocorra a liberação da lista corretamente;
                    </p>
                    <p className={styles.pAnimation3}>
                        linha 5 prev receberá o elemento p;
                    </p>
                    <p className={styles.pAnimation4}>
                        linha 6 p irá receber seu próximo elemento
                    </p>
                    <p className={styles.pAnimation5}>
                        linha 7 ocorre a liberação da memória do elemento prev
                    </p>
                    <p className={styles.pAnimation6}>
                        linha 8 logo a após a liberação de cada elemento (Node) irá ocorrer a liberação da 
                        lista.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}