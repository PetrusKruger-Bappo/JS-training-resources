import React from "react";
import { ScrollView, styled, Text, View } from "bappo-components";

export default function TenderCountDashboardTable() {
  let dashboard = (
    <ScrollView>
      <Row style={styles.headerRow}>
        <Cell style={styles.headerRow}>Test</Cell>
        <Cell style={styles.headerRow}>Test</Cell>
        <Cell style={styles.headerRow}>Test</Cell>
        <Cell style={styles.headerRow}>Test</Cell>
        <Cell style={styles.headerRow}>Test</Cell>
        <Cell style={styles.headerRow}>Test</Cell>
        <Cell style={styles.headerRow}>Test</Cell>
      </Row>
      <Row style={styles.seperator}> </Row>
      <Row>
        <Column>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
        </Column>
      </Row>
      <Row>
        <Column>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
        </Column>
      </Row>
      <Row>
        <Column>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
          <Cell>Test</Cell>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
          <Cell>Test</Cell>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
          <Cell>Test</Cell>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
          <Cell>Test</Cell>
        </Column>
        <Column>
          <Cell>Test</Cell>
        </Column>
      </Row>
      <Row style={styles.seperator}> </Row>
      <Row>
        <Column>
          <Cell>Test</Cell>
        </Column>
        <ColContainer>
          <RowContainer>
            <Column>
              <Cell>Test</Cell>
            </Column>
            <Column>
              <Cell>Test</Cell>
              <Cell>Test</Cell>
            </Column>
            <Column>
              <Cell>Test</Cell>
              <Cell>Test</Cell>
            </Column>
            <Column>
              <Cell>Test</Cell>
              <Cell>Test</Cell>
            </Column>
            <Column>
              <Cell>Test</Cell>
            </Column>
          </RowContainer>
          <RowContainer>
            <Column>
              <Cell>Test</Cell>
            </Column>
            <Column>
              <Cell>Test</Cell>
            </Column>
            <Column>
              <Cell>Test</Cell>
            </Column>
            <Column>
              <Cell>Test</Cell>
            </Column>
            <Column>
              <Cell>Test</Cell>
            </Column>
          </RowContainer>
        </ColContainer>
        <Column>
          <Cell>Test</Cell>
        </Column>
      </Row>
    </ScrollView>
  );

  return <ScrollView style={styles.background}>{dashboard}</ScrollView>;
}

const styles = {
  background: {
    backgroundColor: "#f7f7f7",
    padding: "16px"
  },
  headerRow: {
    backgroundColor: "#3575bc",
    color: "white",
    border: "none"
  },
  seperator: {
    margin: "5px"
  }
};

const Row = styled(View)`
  width: auto;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 0px 0px 0px;
`;
const RowContainer = styled(View)`
  flex: 5;
  flex-direction: row;
`;

const ColContainer = styled(View)`
  flex: 5;
  flex-direction: column;
`;

const Column = styled(View)`
  flex: 1;
  flex-direction: column;
`;

const Cell = styled(View)`
  flex: 1;
  background-color: #ffffff;
  border: 1px solid #eee;
  padding: 2px 2px 2px 5px;
  margin: 1px 0px 1px 0px;
`;
