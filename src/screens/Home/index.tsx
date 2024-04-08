import { View, Text, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native'
import {styles} from './styles'
import { useState } from 'react'

import { Participant } from '../../components/Participant'

export const Home = () => {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState<string>('')



  const handleParticipantAdd = (name: string) => {
    if(participants.includes(name)) {

      return Alert.alert('Participante já existe', 'Já existe um participante na lista com esse nome.')
    }

    setParticipants(prevState => [...prevState, participantName])

    setParticipantName('')
  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {


          setParticipants(prevState => prevState.filter(participante => participante !== name))
          return Alert.alert('Deletado!')
        }
      }, 
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
     
     <Text style={styles.eventDate}>
      Segunda, 08 de Abril de 2024.
     </Text>


    <View style={styles.form}>
      <TextInput style={styles.input} value={participantName} onChangeText={setParticipantName} placeholder='Nome do participante' placeholderTextColor={'#6B6B6B'}  />
      <TouchableOpacity style={styles.buttonContainer} onPress={() => handleParticipantAdd(participantName)}>
        <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
    </View>


    <FlatList 
      data={participants}
      keyExtractor={item => item}
      renderItem={({item}) => <Participant key={item} name={item} onRemove={handleParticipantRemove} />}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyComponent}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença;
        </Text>
      )}
    />
     

    </View>
  )
}