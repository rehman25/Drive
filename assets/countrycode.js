import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image,
  Modal,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

const { width } = Dimensions.get('window');

const Countrypicker = ({ 
    placeholderTextColor,
    inputStyles,
    label,
    value,
    setValues,
    defaultValue,
    type,
    pass,
    placeholder,
    viewStyle,
    onBlur,
}) => {
    const [areas, setAreas] = useState([]);
    const [selectedArea, setSelectedArea] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then(response => response.json())
            .then(data => {
                const countries = data.map(item => ({
                    code: item.alpha2Code,
                    name: item.name,
                    callingCode: `+${item.callingCodes[0]}`,
                    flag: `https://flagcdn.com/w320/bd.png/${item.name}`
                }));
                setAreas(countries);

                const defaultCountry = countries.find(country => country.code === 'US');
                if (defaultCountry) {
                    setSelectedArea(defaultCountry);
                }
            });
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.item}
            onPress={() => {
                setSelectedArea(item);
                setModalVisible(false);
            }}
        >
            <Image source={{ uri: item.flag }} style={styles.flag} />
            <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderAreaCodeModal = () => (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <FlatList
                            data={areas}
                            renderItem={renderItem}
                            keyExtractor={item => item.code}
                            showsVerticalScrollIndicator={false}
                            style={styles.flatList}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity
                            style={styles.countryPicker}
                            onPress={() => setModalVisible(true)}
                        >
                            <View style={styles.flagContainer}>
                                <Image source={{ uri: selectedArea?.flag }} style={styles.selectedFlag} />
                            </View>
                            <View style={styles.callingCodeContainer}>
                                <Text style={styles.callingCode}>{selectedArea?.callingCode}</Text>
                            </View>
                        </TouchableOpacity>
                        <TextInput
                            mode="outlined"
                            label={label}
                            placeholder={placeholder}
                            value={value}
                            style={[styles.textInput, inputStyles]}
                            secureTextEntry={pass}
                            keyboardType="numeric"
                            placeholderTextColor={placeholderTextColor || '#D0D0D0'}
                            onChangeText={setValues}
                            onBlur={onBlur}
                        />
                    </View>
                </View>
                {renderAreaCodeModal()}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        zIndex: 99,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryPicker: {
        width: 100,
        height: 45,
        marginTop: 5,
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
    },
    flagContainer: {
        justifyContent: 'center',
    },
    selectedFlag: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },
    callingCodeContainer: {
        justifyContent: 'center',
    },
    callingCode: {
        color: 'red',
        fontSize: 12,
    },
    textInput: {
        flex: 1,
        marginLeft: 10,
    },
    item: {
        padding: 10,
        flexDirection: 'row',
    },
    flag: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    itemText: {
        marginLeft: 10,
        fontSize: 16,
        color: 'black',
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        height: 400,
        width: width * 0.8,
        backgroundColor: 'white',
        borderRadius: 12,
    },
    flatList: {
        padding: 20,
        marginBottom: 20,
    },
});

export default Countrypicker;
