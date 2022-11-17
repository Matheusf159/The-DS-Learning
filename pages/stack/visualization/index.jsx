import React, { useState } from "react";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { Container, Row, Col, Button } from "reactstrap";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

import styles from "../../../styles/StackInterative.module.css";

import {
CreateStackCode, 
PushStackCode, 
StructStackCode, 
PopStackCode, 
FreeStackCode, 
IsEmptyStackCode, 
IsFullStackCode, 
TopStackCode} from '../../../components/stacksComponents/CodesStack/CodesStack'

import { methods } from "../../../components/stacksComponents/methods";
import StackMake from "../../../components/StackMake";

export default function StackInterative() {
  // Button'setS State
  const [showBtnCreateStack, setShowBtnCreateStack] = useState(true);

  const [showCodeCreateStack, setShowCodeCreateStack] = useState(false);
  const [showCodePushStack, setShowCodePushStack] = useState(false);
  const [showCodePopStack, setShowCodePopStack] = useState(false);
  const [showCodeFreeStack, setShowCodeFreeStack] = useState(false);
  const [showCodeStructStack, setShowCodeStructStack] = useState(true);
  const [showCodeIsEmptyStack, setShowCodeIsEmptyStack] = useState(false);
  const [showCodeIsFullStack, setShowCodeIsFullStack] = useState(false);
  const [showCodeTopStack, setShowCodeTopStack] = useState(false);

  const [showConfirmPush, setShowConfirmPush] = useState(true);
  const [showConfirmPop, setShowConfirmPop] = useState(true);

  const [showStepPush, setShowStepPush] = useState(false)
  const [showStepPop, setShowStepPop] = useState(false)

  // Texts and inputs show
  const [ShowextStep, setShowNextStep] = useState(false);
  const [showIputStruct, setShowInputStruct] = useState(true);

  // Values inputs states
  const [valuePush, setValuePush] = useState(0);
  const [valueStruct, setValueStruct] = useState('');

  const [valueListPush, setValueListPush] = useState([]);

  // Attentions Messages
  const [attentionFreeStack, setAttentionFreeStack] = useState(false);
  const [attentionIsEmptyStack, setAttentionIsEmptyStack] = useState(false);

  // Button's functions
  function btnCreateStack() {
    if (valueStruct > 0) {
      setShowBtnCreateStack(false);
      setShowNextStep(true);
      setShowInputStruct(false);

      setShowCodeCreateStack(true);
      setShowCodeFreeStack(false);
      setShowCodeStructStack(false);
      setShowCodeIsEmptyStack(false);
      setShowCodeIsFullStack(false);
      setShowCodeTopStack(false);

      setAttentionFreeStack(false);
      setAttentionIsEmptyStack(false);
    }
  }

  function btnPushStack() {
    if (!showBtnCreateStack) {
      setShowNextStep(false);
      setShowStepPush(false)
      setShowCodePushStack(true);
      setShowCodeCreateStack(false);
      setShowCodeFreeStack(false);
      setShowCodeIsFullStack(false);
      setShowCodePopStack(false);
      setShowCodeIsEmptyStack(false);
      setShowCodeTopStack(false);
      
      setAttentionIsEmptyStack(false);
    }

    if (valueListPush.length != valueStruct) {
      setShowConfirmPush(true);
      setShowCodeIsEmptyStack(false);
      setShowCodeIsFullStack(false);
      setAttentionIsEmptyStack(false);
    }
  }

  function btnPopStack() {
    if (!showBtnCreateStack) {
      setShowCodePushStack(false);
      setShowCodePopStack(true);
      setShowCodeFreeStack(false);
      setShowCodeCreateStack(false);
      setShowCodeIsEmptyStack(false);
      setShowCodeIsFullStack(false);
      setShowCodeTopStack(false);

      setAttentionIsEmptyStack(false);
      setShowNextStep(false)

      if (valueListPush.length == 0) {
        setShowConfirmPop(false);
        setAttentionIsEmptyStack(true);
      }
    }

    if (valueListPush.length == []) {
      setShowConfirmPush(true);
    }

    if (valueListPush.length != []) {
      setShowConfirmPop(true);
    }
  }

  function btnFreeStack() {
    if (!showBtnCreateStack && valueStruct > 0) {
      setShowCodePushStack(false);
      setShowCodeCreateStack(false);
      setShowCodePopStack(false);
      setShowCodeIsEmptyStack(false);
      setShowCodeFreeStack(true);
      setShowCodeIsFullStack(false);
      setShowCodeTopStack(false);

      setValueStruct(0);
      setValuePush(0);
      setValueListPush([]);
      setShowInputStruct(true);
      setShowBtnCreateStack(true);
      setShowNextStep(false);
      setAttentionIsEmptyStack(false);
      setShowCodeStructStack(true)
    }

    if (valueStruct == 0) {
      setAttentionFreeStack(true);
    }
  }

  function btnIsEmpty() {
    if (!showBtnCreateStack) {
      setShowCodeCreateStack(false);
      setShowCodePushStack(false);
      setShowCodePopStack(false);
      setShowCodeFreeStack(false);
      setShowCodeStructStack(false);
      setShowCodeIsEmptyStack(true);
      setShowCodeIsFullStack(false);
      setShowCodeTopStack(false);
      
      setShowConfirmPop(false);
      setShowConfirmPush(false);
      setAttentionIsEmptyStack(true);
    }
  }
  
  function btnIsFull() {
    if (!showBtnCreateStack) {
      setShowCodeCreateStack(false);
      setShowCodePushStack(false);
      setShowCodePopStack(false);
      setShowCodeFreeStack(false);
      setShowCodeStructStack(false);
      setShowCodeIsEmptyStack(false);
      setShowCodeIsFullStack(true);
      setShowCodeTopStack(false);
      
      setShowConfirmPop(false);
      setShowConfirmPush(false);
      setAttentionIsEmptyStack(false);
    }
  }

  function btnTopStack() {
    if (!showBtnCreateStack) {
      setShowCodeTopStack(true);
      setShowCodePushStack(false);
      setShowCodePopStack(false);
      setShowCodeIsEmptyStack(false);
      setShowCodeIsFullStack(false);
      setShowCodeFreeStack(false);
      setAttentionIsEmptyStack(false)
    }
  }

  function confirmPush() {
    setShowStepPush(true)
    setShowConfirmPush(false)
    
    if(showStepPush) {
      if (valueListPush.length < valueStruct && valuePush != '') {
        setValueListPush([...valueListPush, valuePush]);
      }
      
      if (valueListPush.length == valueStruct - 1) {
        setShowConfirmPush(false);
      }
      
      if (valueListPush.length == valueStruct - 1) {
        setShowCodePushStack(false);
        setShowCodeIsFullStack(true);
      }
      
      setShowConfirmPush(true)
    } else {
      setTimeout(() => {
        if (valueListPush.length < valueStruct && valuePush != '') {
          setValueListPush([...valueListPush, valuePush]);
        }
        
        if (valueListPush.length == valueStruct - 1) {
          setShowConfirmPush(false);
        }
        
        if (valueListPush.length == valueStruct - 1) {
          setShowCodePushStack(false);
          setShowCodeIsFullStack(true);
        }
        
        setShowConfirmPush(true)
    
      }, 7000);
    }
   
  }

  function confirmPop() {
    setShowStepPop(true)
    setShowConfirmPop(false)
    
    if(showStepPop) {
      setValueListPush(valueListPush.slice(0, -1));
      setShowCodeIsEmptyStack(false);
      if (valueListPush.length <= 1) {
        setShowConfirmPop(false);
      } else {
        setShowConfirmPop(true)
      }
      
    } else {
        setTimeout(() => {
          setValueListPush(valueListPush.slice(0, -1));
          setShowCodeIsEmptyStack(false);
          if (valueListPush.length <= 1) {
            setShowConfirmPop(false);
          } else {
            setShowConfirmPop(true)
          }
          
        }, 7000);
    }

  }

  return (
      <Container>
        <Row>
             <Col>
                <Row className={styles.inputUser}>
                  <Row style={{ display: showIputStruct ? "" : "none" }}>
                    <div className={styles.displayFlex}>
                      <h3>Escolha o tamanho da pilha de 1 a 7: </h3>
                      
                      <select 
                        className={styles.inputStructStack} 
                        value={valueStruct} 
                        onChange={(v) => setValueStruct(v.target.value)}
                      >
                          <option value="0"></option>
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
                      className={styles.btnInterative}
                      style={{ display: showBtnCreateStack ? "" : "none", opacity: valueStruct >= 1 ? '1' : '0.5' }}
                      onClick={btnCreateStack}
                    >
                      CRIAR PILHA
                    </button>
                  </Row>

                  <h3 style={{ display: ShowextStep ? "" : "none" }}>SELECIONE A PRÓXIMA OPERAÇÃO</h3>

                  <div
                    className={styles.contentInput}
                    style={{ display: showCodePushStack ? "" : "none" }}
                    >   
                    <Row>
                      <Col>
                      <p className={styles.funcInput}>pilha_push{"("}p,</p>
                      </Col>

                      <Col>
                        <input
                          type="number"
                          name="name"
                          min="0" 
                          max="999"
                          maxLength="4"
                          className={styles.inputValues}
                          value={valuePush}
                          onChange={(v) => {
                            const limit = 3;
                            setValuePush(v.target.value.slice(0, limit))
                          }}
                        />
                      </Col>
                      
                      <Col>
                        <p className={styles.funcInput}>{")"}</p>
                      </Col>
                      
                      <Col>
                        <div style={{ display: showConfirmPush ? "" : "none" }}>
                          <button
                            type="submit"
                            className={styles.btnInterativeUser}
                            
                            onClick={confirmPush}
                            >
                            CONFIRMAR
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div 
                    className={styles.contentInput}
                    style={{ display: showCodePopStack ? "" : "none" }}
                  >
                      <p className={styles.funcInput}>{"pop(p, &v)"}</p>

                      <div style={{ display: showConfirmPop ? "" : "none" }}>
                        <button
                          type="submit"
                          className={styles.btnInterativeUser}
                          onClick={confirmPop}
                        >
                          CONFIRMAR
                        </button>
                      </div>
                  </div>

                  <div 
                    className={styles.divAttention}
                    style={{ display: attentionIsEmptyStack ? "" : "none" }}
                  >
                      {valueListPush.length > 0 ? (
                        <p className={styles.pAttention}>
                          A PILHA NÃO ESTÁ VAZIA, POIS POSSUI OS VALORES:{" "}
                        </p>
                      ) : (
                        <p className={styles.paragraph}>
                          A PILHA ESTÁ VAZIA!!
                        </p>
                      )}

                      <div className={styles.displayFlex}>
                        {valueListPush.length > 0
                          ? valueListPush.map((e) => (
                              <p
                                key={-1}
                                className={styles.valueListPushStyle}
                              >
                                {e}
                              </p>
                            ))
                          : ""}
                      </div>
                  </div>

                  <div 
                    className={styles.divAttention}
                    style={{ display: showCodeIsFullStack ? "" : "none" }}
                  >
                    {
                      valueListPush.length == valueStruct
                      ? <p className={styles.pAttention}>A PILHA ESTÁ CHEIA!!</p>
                      : 
                        <p className={styles.pAttention}>
                          A PILHA NÃO ESTÁ CHEIA POIS EXISTEM {`${valueStruct-valueListPush.length}`} ESPAÇO(S) LIVRES
                        </p>
                    }
                  </div>

                  <div
                    style={{
                      display: showCodeTopStack ? "" : "none",
                    }}
                  >
                    <h3 className={styles.h3Style}>
                      {`O Topo da pilha é :`}
                    </h3>

                    <h3 className={styles.h3Style}>
                      {valueListPush.slice(-1)}
                    </h3>
                  </div>
                </Row>
                
                <Row className={styles.buttonsInterative}>
                  <Row className={styles.buttonsLine}>
                    <button
                      className={styles.btnInterative}
                      style={{ opacity: showBtnCreateStack ? "0.5" : "1" }}
                      onClick={btnPushStack}
                    >
                      EMPILHAR
                    </button>

                    <button
                      className={styles.btnInterative}
                      style={{ opacity: showBtnCreateStack ? "0.5" : "1" }}
                      onClick={btnPopStack}
                    >
                      DESEMPILHAR
                    </button>

                    <button
                      className={styles.btnInterative}
                      onClick={btnFreeStack}
                      style={{ opacity: showBtnCreateStack ? "0.5" : "1" }}
                    >
                      LIBERAR
                    </button>
                  </Row>
                  
                  <Row className={styles.buttonsLine}>
                    <button
                      className={styles.btnInterative}
                      style={{ opacity: showBtnCreateStack ? "0.5" : "1" }}
                      onClick={btnTopStack}
                    >
                      TOPO
                    </button>

                    <button 
                      className={styles.btnInterative}
                      style={{ opacity: showBtnCreateStack ? "0.5" : "1" }}
                      onClick={btnIsEmpty}
                    >
                      ESTÁ VAZIA
                    </button>

                    <button 
                      className={styles.btnInterative}
                      style={{ opacity: showBtnCreateStack ? "0.5" : "1" }}
                      onClick={btnIsFull}
                    >
                      ESTÁ CHEIA
                    </button>
                  </Row>
                </Row>

              <Row className={styles.rightLeftdowns}>
                  <StructStackCode
                    show={showCodeStructStack}
                    inputValue={valueStruct}
                    listTest={valueListPush}
                  />

                  <CreateStackCode show={showCodeCreateStack} />

                  <PushStackCode
                    show={showCodePushStack}
                    inputValue={valuePush}
                    showSteps={showStepPush}
                  />

                  <PopStackCode 
                    show={showCodePopStack} 
                    showSteps={showStepPop}
                  />
                  
                  <FreeStackCode show={showCodeFreeStack} />
                  <IsEmptyStackCode show={showCodeIsEmptyStack} />

                  <IsFullStackCode
                    show={showCodeIsFullStack}
                    fullValue={valueStruct}
                  />

                  <TopStackCode show={showCodeTopStack} fullValue={valueStruct} />
              </Row>
            </Col>
            
            <Col lg={2} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <StackMake
                  valueStruct={valueStruct}
                  listTest={valueListPush}
                  topValue={valueListPush.length}
                  />
            </Col>
        </Row>
      </Container>
  );
}

StackInterative.getLayout = function getLayout(page) {
  return (
    <Layout pageTitle="DS-Learning | Pilha">
      <Sidebar />
      <section>
        <NavStructMenu 
          structName="PILHA" 
          iconName={faLayerGroup} 
          linkStruct="stack"
          linkVisualization="stack/visualization"
          linkExercicio="stack/exercices"
          methods={methods}
        />
        {page}
      </section>
    </Layout>
  );
};
