import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import styles from "./navstructmenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NavStructMenu({
  iconName,
  structName,
  linkStruct,
  linkVisualization,
  linkExercicio,
  methods,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  const [methodsLocal, setMethodsLocal] = useState(methods);
  const [linkStructLocal, setLinkStruct] = useState(linkStruct);
  const [linkVisualizationLocal, setLinkVisualization] = useState(linkVisualization);
  const [linkExercicioLocal, setLinkExercicio] = useState(linkExercicio);
  
  useEffect(() => {
    setMethodsLocal(methods)
    setLinkStruct(linkStruct)
    setLinkVisualization(linkVisualization)
    setLinkExercicio(linkExercicio)
  }, [methods, linkStruct, linkVisualization, linkExercicio])

  return (
    <Row className={styles.header}>
      <Col lg={6} className={styles.headerTitle}>
        <Link href={`${linkStructLocal}`}>
          <a className={styles.alink}>
            <FontAwesomeIcon icon={iconName} className={styles.icon} />
            {structName}
          </a>
        </Link>
      </Col>

      <Col lg={6} className={styles.headerItens}>
        <ButtonGroup>
          <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Métodos</DropdownToggle>
            <DropdownMenu>
              {methodsLocal?.map((method, index) => (
                <DropdownItem key={index}>
                  <Link href={`${method.link}`}>
                    <a>{method.nameMethod}</a>
                  </Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </ButtonDropdown>

          <Button>
            {" "}
            <Link href={`${linkVisualizationLocal}`}>
              <a className={styles.alink}>Visualização</a>
            </Link>
          </Button>

          <Button>
            {" "}
            <Link href={`${linkExercicioLocal}`}>
              <a className={styles.alink}>Exercícios</a>
            </Link>
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
}
