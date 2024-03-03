// Modal.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import styles from './styles';

interface ModalProps {
  visible: boolean;
  value: string;
  idSubject: number;
  onClose: () => void;
}

const CustomModal = ({ visible, value, idSubject, onClose }: ModalProps) => {
  const subject =
    idSubject === 1
      ? 'Radar de Maturidade de Business Agility'
      : idSubject === 2
      ? 'Radar de Maturidade para 3 Times Ágeis'
      : 'Treinamento de Kanban na Prática';

  return (
    <Modal animationType='slide' transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>
              Inscreva-se <Text style={styles.bold}>Gratuitamente</Text> no Sorteio {'\n'} do{' '}
              <Text style={styles.bold}>{subject}</Text>
            </Text>
          </View>

          <View style={styles.modalBody}>
            <View>
              <Text style={styles.modalBodyTitle}>Escaneie o Qr code</Text>
              <Text style={styles.modalBodyPhrase}>
                Você será direcionado para a página {'\n'} de inscrição do{' '}
                <Text style={styles.emphasis}>1º Prêmio</Text>.
              </Text>
            </View>

            <QRCode value={value} size={200} />

            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
