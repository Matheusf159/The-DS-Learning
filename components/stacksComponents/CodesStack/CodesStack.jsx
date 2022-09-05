import React from 'react'

import styles from './codesStack.module.css'

export function CreateStackCode(props) {
    const code = 
`
1.  Pilha* criarPilha() {
2.      Pilha* p = (Pilha*);
3.      malloc(sizeof(Pilha));
4.      p -> topo = 0;
5.      return p;
6.  }`

    return (
        <div style={{display: props.show ? "": "none"}}>
            <pre>
                <code className={styles.codes}>
                    {code}
                </code>
            </pre>
        </div>
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
        <div style={{display: props.show ? "": "none"}}>
            <pre>
                <code className={styles.codes}>
                    {code}
                </code>
            </pre>
        </div>
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
        <div style={{display: props.show ? "": "none"}}>
            <pre>
                <code className={styles.codes}>
                    {code}
                </code>
            </pre>
        </div>
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
        <div style={{display: props.show ? "": "none"}}>
            <pre>
                <code className={styles.codes}>
                    {code}
                </code>
            </pre>
        </div>
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
        <div style={{display: props.show ? "": "none"}}>
            <pre>
                <code className={styles.codes}>
                    {code}
                </code>
            </pre>
        </div>
    )
}

export function PushStackCode(props) {
    const code = 
`
1.  int pilha_push(Pilha *p, float v) {
2.      if(!esta_cheia(p)) {
3.          p->vetor[p->top++] = ${props.inputValue};
4.          return 1;
5.      }
6.      return 0;
7.  }`

    return (
        <div style={{display: props.show ? "": "none"}}>
            <pre>
                <code className={styles.codes}>
                    {code}
                </code>
            </pre>
        </div>
    )
}

export function StructStackCode(props) {
    const code = 
`1.  typedef struct pilha {
2.      int top;
3.      int vetor[${props.inputValue}];
4.  }Pilha;`   

    return (
        <div style={{display: props.show ? "": "none"}}>
            <pre>
                <code className={styles.codes}>
                    {code}
                </code>
            </pre>
        </div>
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
        <div style={{display: props.show ? "": "none"}}>
            <pre>
                <code className={styles.codes}>
                    {code}
                </code>
            </pre>
        </div>
    )
}