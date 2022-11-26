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
3.      Node *last;
4.      int len;
5. } List;`

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
                        <i>*least:</i> ponteiro responsável por para elemento final da lista; <br />
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
3.      list->head = list->last = NULL;
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
                        linha 3 irá iniciar apontando início e o fim da lista para NULL;
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
3.      new->info = ${props.inputValue};
4.      if(is_empty(L)) {
5.          L->last = new;    
6.      }
7.      new->next = L->head;
8.      L->head = new;
9.      L->len++;
10.}`

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
                        linha 3 a informação do novo nodo irá receber o valor passado;
                    </p>
                    <p className={styles.pAnimation2}> 
                        linha 4 irá verificar se a lista esta vazia, caso esteja, na linha seguinte o ponteiro 
                        que aponta para o fim da lista irá apontar para o novo elemento;
                    </p>
                    <p className={styles.pAnimation3}>
                        linha 6 o ponteiro next do novo elemento irá receber o início da lista;
                    </p>
                    <p className={styles.pAnimation4}>
                        linha 8 o início da lista irá receber o nome elemento;
                    </p>
                    <p className={styles.pAnimation5}>
                        linha 9 o tamanho da lista será incrementado.
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
2.      if(is_empty(L)) {
3.          return insert_begin(L, v);
4.      }
5.      Nodo *new = (Nodo*) malloc(sizeof(Nodo));    
6.      new->info = ${props.inputValue};
7.      L->last->next = new;
8.      L->last = new;
9.      L->last->next = NULL;
10.     L->len++;
11.}`

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
                        linha 2 verifica se a lista esta vazia, caso esteja, a linha seguinte
                        retornará a chamada da função insert_begin para adicionar o novo elemento. 
                    </p>
                    <p className={styles.pAnimation2}>
                        linha 5 responsável por alocar um novo elemento da lista na memória; 
                    </p>
                    <p className={styles.pAnimation3}>
                        linha 6 a informação do novo elemento irá receber o valor passado;
                    </p>
                    <p className={styles.pAnimation4}>
                        linha 7 o ponteiro próximo do elemento final da lista irá receber o 
                        novo elemento;
                    </p>
                    <p className={styles.pAnimation5}>
                        linha 8 o final da lista ira receber o novo elemento;
                    </p>
                    <p className={styles.pAnimation6}>
                        linha 9 o ponteiro próximo do novo elemento final da lista irá receber NULL <br />
                        linha 10 o tamanho da lista irá ser incrementado.
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
3.          if(p->info==${props.inputSearch})
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