import React from 'react'

import styles from './codesQueue.module.css'

export function StructQueueCode(props) {
    const code =
`1.  typedef struct fila {
2.  	int vetor[${props.inputValue}];
3.  	int inicio;
4.  	int fim;
5.  }Fila;`

    return(
        <div style={{ display: props.show ? "" : "none" }}>
            <pre>
                <code className={styles.codes}>
                    {code}
                </code>
            </pre>
        </div>
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
        <div style={{ display: props.show ? "" : "none" }}>
            <pre>
                <code className={styles.codes}>
                    {code}
                </code>
            </pre>
        </div>
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
        <div style={{ display: props.show ? "" : "none" }}>
            <pre>
                <code className={styles.codes}>
                    {code}
                </code>
            </pre>
        </div>
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
        <div style={{ display: props.show ? "" : "none" }}>
            <pre>
                <code className={styles.codes}>
                    {code}
                </code>
            </pre>
        </div>
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
        <div style={{ display: props.show ? "" : "none" }}>
            <pre>
                <code className={styles.codes}>
                    {code}
                </code>
            </pre>
        </div>
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
        <div style={{ display: props.show ? "" : "none" }}>
            <pre>
                <code className={styles.codes}>
                    {code}
                </code>
            </pre>
        </div>
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
        <div style={{ display: props.show ? "" : "none" }}>
            <pre>
                <code className={styles.codes}>
                    {code}
                </code>
            </pre>
        </div>
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
        <div style={{ display: props.show ? "" : "none" }}>
            <pre>
                <code className={styles.codes}>
                    {code}
                </code>
            </pre>
        </div>
    )

}