import React, { useState } from "react";
import Layout from "../../../components/Layout";
import NavStructMenu from "../../../components/NavStructMenu";
import Sidebar from "../../../components/Sidebar";
import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons";
import { methods } from '../methods/methods'
import styles from '../../../styles/QueueInterative.module.css'
import { Container } from "reactstrap";
import QueueMake from '../../../components/QueueMake'

import {
    StructQueueCode,
    CreateQueueCode,
    DequeueCode,
    EnqueueCode,
    FreeQueueCode,
    IsEmptyQueueCode,
    IsFullQueueCode,
    PrintQueueCode,
} from '../../../components/QueueComponents/CodesQueue/CodesQueue'

export default function QueueInterative() {
    // values input
    const [valueEnqueue, setValueEnqueue] = useState(0)
    const [valueStruct, setValueStruct] = useState('')

    const [valueListEnqueue, setValueListEnqueue] = useState([])

    // states infos
    const [showChooseLength, setShowChooseLength] = useState(true)
    const [showNextStep, setShowNextStep] = useState(false)
 
    // button's set state
    const [showBtnCreateQueue, setShowBtnCreateQueue] = useState(true)

    const [showCodeStructQueue, setShowCodeStructQueue] = useState(true)
    const [showCodeCreateQueue, setShowCodeCreateQueue] = useState(false)
    const [showCodeDequeue, setShowCodeDequeue] = useState(false)
    const [showCodeEnqueue, setShowCodeEnqueue] = useState(false)
    const [showCodeFreeQueue, setShowCodeFreeQueue] = useState(false)
    const [showCodeIsEmptyQueue, setShowCodeIsEmptyQueue] = useState(false)
    const [showCodeIsFullQueue, setShowCodeIsFullQueue] = useState(false)
    const [showCodePrintQueue, setShowCodePrintQueue] = useState(false)
    
    const [showConfirmEnqueue, setShowConfirmEnqueue] = useState(true)
    const [showConfirmDequeue, setShowConfirmDequeue] = useState(true)

    // attention's messages
    const [attentionIsFullQueue, setAttentionIsFullQueue] = useState(false)
    const [attentionIsEmptyQueue, setAttentionIsEmptyQueue] = useState(false)
    const [attentionFreeQueue, setAttentionFreeQueue] = useState(false)

    // button's functions
    function btnCreateQueue() {
        if (valueStruct > 0) {
            setShowBtnCreateQueue(false)
            setShowChooseLength(false)
            setShowNextStep(true)
            setShowBtnCreateQueue(false)

            setShowCodeStructQueue(false)
            setShowCodeCreateQueue(true)
            setShowCodeDequeue(false)
            setShowCodeEnqueue(false)
            setShowCodeFreeQueue(false)
            setShowCodeIsEmptyQueue(false)
            setShowCodeIsFullQueue(false)
            setShowCodePrintQueue(false)

            setAttentionFreeQueue(false)
            setAttentionIsEmptyQueue(false)
        }
    }

    function btnEnqueue() {
        if(!showBtnCreateQueue) {
            setShowNextStep(false)

            setShowCodeEnqueue(true)
            setShowCodeCreateQueue(false)
            setShowCodeDequeue(false)
            setShowCodeFreeQueue(false)
            setShowCodeIsEmptyQueue(false)
            setShowCodeIsFullQueue(false)
            setShowCodePrintQueue(false)

            setAttentionIsEmptyQueue(false)
        }

        if (valueListEnqueue.length != valueStruct) {
            console.log("adadaddd")
            setShowConfirmEnqueue(true)
            setShowCodeIsEmptyQueue(false)
            setShowCodeIsFullQueue(false)
            setAttentionIsEmptyQueue(false)
        }
    }

    function btnDequeue() {
        if (!showBtnCreateQueue) {
            setShowCodeEnqueue(false)
            setShowCodeDequeue(true)
            setShowCodeFreeQueue(false)
            setShowBtnCreateQueue(false)
            setShowCodeIsEmptyQueue(false)
            setShowCodeIsFullQueue(false)
            setShowCodePrintQueue(false)

            setAttentionIsEmptyQueue(false)
            setShowNextStep(false)
        }

        if (valueListEnqueue.length == 0) {
            setShowConfirmDequeue(false);
            setShowCodeIsEmptyQueue(true)
        }

        if (valueListEnqueue.length == []) {
            setShowConfirmEnqueue(true);
        }

        if (valueListEnqueue.length != []) {
            setShowConfirmDequeue(true)
        }
    }

    function btnFreeQueue() {
        if (!showBtnCreateQueue && valueStruct > 0) {
            setShowCodeEnqueue(false)
            setShowCodeCreateQueue(false)
            setShowCodeDequeue(false)
            setShowCodeIsEmptyQueue(false)
            setShowCodeFreeQueue(true)
            setShowCodeIsFullQueue(false)

            setValueStruct(0)
            setValueEnqueue(0)
            setValueListEnqueue([])
            setShowChooseLength(true)
            setShowBtnCreateQueue(true)
            setShowNextStep(false)
            setAttentionIsFullQueue(false)
            setAttentionIsEmptyQueue(false)
        }

        if (valueStruct <= 0) {
            console.log("entrou aqui")
            setAttentionFreeQueue(true)
        }
    }

    function btnIsEmpty() {
        if (!showBtnCreateQueue) {
            setShowCodeCreateQueue(false)
            setShowCodeEnqueue(false)
            setShowCodeDequeue(false)
            setShowCodeFreeQueue(false)
            setShowCodeStructQueue(false)
            setShowCodeIsEmptyQueue(true)
            setShowCodeIsFullQueue(false)

            setShowConfirmEnqueue(false)
            setShowConfirmDequeue(false)
            setAttentionIsEmptyQueue(true)
        }
    }

    function btnIsFull() {
        if (!showBtnCreateQueue) {
            setShowCodeCreateQueue(false)
            setShowCodeEnqueue(false)
            setShowCodeDequeue(false)
            setShowCodeFreeQueue(false)
            setShowCodeStructQueue(false)
            setShowCodeIsEmptyQueue(false)
            setShowCodeIsFullQueue(true)

            setShowConfirmEnqueue(false)
            setShowConfirmDequeue(false)
            setAttentionIsFullQueue(true)
        }
    }

    function confirmEnqueue() {
        if(valueListEnqueue.length < valueStruct && valueEnqueue != '')
            setValueListEnqueue([...valueListEnqueue, valueEnqueue])
        
        if(valueListEnqueue.length == valueStruct - 1) {
            setShowConfirmEnqueue(false)
        }

        if(valueListEnqueue.length == valueStruct - 1) {
            setShowCodeEnqueue(false)

            setAttentionIsFullQueue(true)
        }
    }

    function confirmDequeue() {
        setValueListEnqueue(valueListEnqueue.slice(1, valueListEnqueue.length))
        setShowCodeIsEmptyQueue(false)

        if (valueListEnqueue.length <= 1) setShowConfirmDequeue(false)
        
        if(valueListEnqueue.length != valueStruct - 1) {
            console.log("Entrou")
            setAttentionIsFullQueue(false)}
    }

    return (
        <Container>
                <div className={styles.container}>
                    <section className={styles.buttonsCodes}>
                        <div className={styles.buttons}>
                            <div 
                                className={styles.userInfo}
                                style={{ display: showChooseLength ? " " : "none"}}
                            >
                                <h3>Escolha o tamanho da fila de 1 a 7:</h3>

                                <select 
                                    className={styles.inputStructQueue}
                                    value={valueStruct}
                                    onChange={(q) => setValueStruct(q.target.value)}
                                >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                </select>

                            </div>
                            
                            <button 
                                className={styles.buttonInterative}
                                style={{display: showBtnCreateQueue ? " " : "none"}}
                                onClick={btnCreateQueue}
                            >
                                    CRIAR FILA
                            </button>

                            <div className={styles.infos} style={{ display: showChooseLength ? "none": " "}}>
                                <h3 style={{ display: showNextStep ? " " : "none"}}>Selecione a próxima operação</h3>
                                {/* <h3 style={{ display: attentionIsFullQueue ? "" : "none"}}>A FILA ESTÁ CHEIA</h3> */}
                            </div>

                            <h3
                                className={styles.attention}
                                style={{ display: attentionFreeQueue ? " " : "none" }}
                            >
                                NÃO HÁ FILA PARA LIBERAR, SELECIONE O TAMANHO PARA
                                ALOCAÇÃO DE MEMÓRIA DA FILA
                            </h3>

                            <div
                                className={styles.divAttention}
                                style={{ display: attentionIsEmptyQueue ? "" : "none" }}
                            >
                                {valueListEnqueue.length > 0 ? (
                                    <p className={styles.paragraph}>
                                        A FILA NÃO ESTÁ VAZIA, POIS POSSUI OS VALORES: {" "}
                                    </p>
                                ) : (
                                    <p className={styles.paragraph}>
                                        A PILHA ESTÁ VAZIA
                                    </p>
                                )
                                }

                                <div className={styles.infos}>
                                    {valueListEnqueue.length > 0 ?
                                        valueListEnqueue.map((e) => (
                                            <p
                                                className={styles.valueListEnqueueStyle}
                                                key={-1}
                                            >
                                                {e}
                                            </p>
                                        )) : ""
                                    }
                                </div>
                            </div>

                            <div
                                className={styles.divAttention}
                                style={{ display: attentionIsFullQueue ? "" : "none" }}
                            >
                                {valueListEnqueue.length == valueStruct ? (
                                    <p className={styles.paragraph}>
                                        A FILA ESTÁ ESTÁ CHEIA
                                    </p>
                                ) : (
                                    <p className={styles.paragraph}>
                                        A FILA NÃO ESTÁ CHEIA, POIS AINDA POSSUI {valueStruct - valueListEnqueue.length} ESPAÇO(S)
                                        FALTANDO.
                                    </p>
                                )
                                }
                            </div>

                            <div
                                className={styles.contentInput}
                                style={{ display: showCodeEnqueue ? "": "none"}}
                            >
                                <p className={styles.funcInput}>enfileirar{"("}f,</p>

                                <input
                                    type="number"
                                    name="name"
                                    min="0" 
                                    max="999"
                                    maxLength="4"
                                    className={styles.inputValues}
                                    value={valueEnqueue}
                                    onChange={(v) => {
                                        const limit = 3;
                                        setValueEnqueue(v.target.value.slice(0, limit))
                                    }}
                                />

                                <p className={styles.funcInput}>{")"}</p>

                                <button
                                    className={styles.buttonInterative}
                                    style={{ display: showConfirmEnqueue ? " " : "none" }}
                                    type="submit"
                                    onClick={confirmEnqueue}
                                >
                                    CONFIRMAR
                                </button>
                            </div>

                            <div
                                className={styles.contentInput}
                                style={{ display: showCodeDequeue ? "" : "none" }}
                            >
                                <p className={styles.funcInput}>desenfileirar(f)</p>

                                <button
                                    className={styles.buttonInterative}
                                    style={{ display: showConfirmDequeue ? "" : "none" }}
                                    type="submit"
                                    onClick={confirmDequeue}
                                >
                                    CONFIRMAR
                                </button>
                            </div>

                            <div className={styles.buttonsUser}>
                                    <div className={styles.line1}>
                                        <button className={styles.buttonInterative} onClick={btnEnqueue}>ENFILEIRAR</button>
                                        <button className={styles.buttonInterative} onClick={btnDequeue}>DESENFILEIRAR</button>
                                        <button className={styles.buttonInterative}>IMPRIMIR FILA</button>
                                    </div>

                                    <div className={styles.line2}>
                                        <button className={styles.buttonInterative} onClick={btnIsEmpty}>FILA VAZIA</button>
                                        <button className={styles.buttonInterative} onClick={btnIsFull}>FILA CHEIA</button>
                                        <button className={styles.buttonInterative} onClick={btnFreeQueue}>LIBERAR FILA</button>
                                    </div>
                            </div>
                        </div>

                        <div className={styles.codes}>
                            <StructQueueCode
                                show={showCodeStructQueue}
                                inputValue={valueStruct}
                                listTest={valueListEnqueue}
                            />

                            <CreateQueueCode show={showCodeCreateQueue} />

                            <EnqueueCode
                                show={showCodeEnqueue}
                                inputValue={valueEnqueue}
                            />

                            <DequeueCode show={showCodeDequeue} />
                            <FreeQueueCode show={showCodeFreeQueue} />
                            <IsEmptyQueueCode show={showCodeIsEmptyQueue} />
                            <IsFullQueueCode show={showCodeIsFullQueue} />
                        </div>
                    </section>

                    <section className={styles.queueInterative}>
                        <QueueMake 
                            valueStruct={valueStruct} 
                            listTest={valueListEnqueue}
                            end={valueListEnqueue.length}
                        />
                    </section>
                </div> 
        </Container>

    )
}


QueueInterative.getLayout = function getLayout(page) {
    return (
        <Layout pageTitle="DS-Learning | Fila">
            <Sidebar />

            <section>
                <NavStructMenu 
                    structName="FILA"
                    iconName={faLinesLeaning}
                    linkStruct="/queue"
                    linkVisualization="/queue/visualization"
                    linkExercicio="/queue/exercicio"
                    methods={methods}
                />
                {page}
            </section>
        </Layout>
    )
}