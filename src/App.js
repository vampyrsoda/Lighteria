import React from "react";
import { SafeAreaView, Text, View, Image, StyleSheet } from "react-native";

const App = () => {
    return(<SafeAreaView style={styles.container}>
        <View style={styles.containerTitulo}>
            <Text style={styles.titulo}>Lighteria</Text>
            <View style={styles.containerSacola}>
                <Image source={require("./assets/images/icone-sacola.png")} style={styles.imagem}/>
            </View>
        </View>

        <View>
            <View style={styles.containerDescricao}>
                <View style={styles.separador}>
                </View>
                <View style={styles.containerTexto}>
                    <Text style={styles.textoDescricao}>Categorias</Text>
                </View>
            </View>
        </View>

    </SafeAreaView>)
};

const styles = StyleSheet.create({
    imagem: {
        height: 30,
        width: 30,
    },

    container: {
        flex: 1, 
        backgroundColor: "#FAFAFA",
    },

    titulo: {
       fontFamily: "OpenSans-ExtraBold",
       fontSize: 28, 
    },

    containerTitulo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,

    },
    containerSacola: {
        backgroundColor: "#ffffff",
        padding: 18,
        borderRadius: 30,
    },

    containerDescricao: {
        paddingHorizontal: 24,

    },

    separador: {
        borderWidth: 0.5,
        borderColor: "#A1A5AA",
    },

    containerTexto: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: -46,
    },

    textoDescricao: {
        padding: 34,
        backgroundColor: "#FAFAFA",
        fontSize: 16,
        fontFamily: "OpenSans-Regular",
        color: "#A1A5AA"

    },

})

export default App;