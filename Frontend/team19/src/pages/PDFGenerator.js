import React, { useState } from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const PDFGenerator = ({ data }) => {
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    table: {
      display: 'table',
      width: 'auto',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    row: {
      flexDirection: 'row',
      borderBottomWidth: 1,
    },
    cell: {
      margin: 'auto',
      marginTop: 5,
      fontSize: 10,
    },
  });

  const MyDocument = (
    <Document>
      <Page size="A4">
        <View style={styles.body}>
          <Text>User Details:</Text>
          <View style={styles.table}>
          <View key='headerrr' style={styles.row}>
                <Text style={styles.cell}>Sr. No.</Text>
                <Text style={styles.cell}>Name</Text>
                <Text style={styles.cell}>Aadhar</Text>
                <Text style={styles.cell}>Gender</Text>
                <Text style={styles.cell}>Status</Text>
              </View>
            {/* Render your table content here */}
            {data.map((element, id) => (
              <View key={element._id} style={styles.row}>
                <Text style={styles.cell}>{id + 1}</Text>
                <Text style={styles.cell}>{element.name}</Text>
                <Text style={styles.cell}>{element.aadhar}</Text>
                <Text style={styles.cell}>{element.gender}</Text>
                <Text style={styles.cell}>{element.status}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <button><PDFDownloadLink style={{color:'white'}} document={MyDocument} fileName="user_details.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download PDF'
      }
    </PDFDownloadLink></button>
  );
};

export default PDFGenerator;
