import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";


const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('./pomodoro.png')
    },
  {
    id: 'short',
    initialValue: 5,
    image: require('./short.png')
  },
  {
    id: 'long',
    initialValue: 15,
    image: require('./long.png')
  }

]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[1])



  return (
    <View
      style={styles.container}
    >
      <Image source={timerType.image}/>
      <View style={styles.actions}>
        <View style={styles.context}>
          <Pressable style={styles.contextButtonActive}>
            <Text style={styles.contextButtonText} >Foco</Text>
            </Pressable>
          <Pressable><Text  style={styles.contextButtonText}>Pausa Curta</Text> </Pressable>
          <Pressable><Text style={styles.contextButtonText}>Pausa Longa</Text></Pressable>
        </View> 

        <Text style={styles.timer}>
          { new Date(timerType.initialValue * 1000). toLocaleTimeString('pt-BR', {minute: '2-digit', second: '2-digit'})}
        </Text>
        <Pressable style={styles.button}>
        <Text style={styles.buttonText} >Começar</Text>
        </Pressable>
      </View>

         <View style={styles.footer}> 
           <Text style={styles.footerText}>Projeto ficticio</Text>
         </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap:40
  },
   actions:{
    paddingVertical: 24, 
    paddingHorizontal: 24,
    backgroundColor: '#14488080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144880',
    gap: 32
   },
   timer:{
    fontSize: 54,
    color: '#FFF',
    fontWeight: 'bold', 
    textAlign: 'center'
   },
   context:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
   },
   contextButtonText:{
    fontSize:12.5,
    color: '#FFF',
    padding: 8
   },
   contextButtonActive:{
    backgroundColor: '#144480',
    borderRadius: 8
   },
   button:{
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
   }, 
   buttonText:{
    textAlign: 'center',
    color: '#021123',
    fontSize: 18
   },
   footer:{
    width: '80%',
   },
   footerText:{
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
   },

})
