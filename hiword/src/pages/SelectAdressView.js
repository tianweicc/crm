import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import NavBar from '../componment/NavBar/index';
import device from '../componment/device';
import Modal from 'react-native-modalbox';
import ImageCard from '../componment/Card/ImageCard';
import SyanImagePicker from 'react-native-syan-image-picker';

  /**
   * 默认参数
   */
  const options = {
    imageCount: 1,          // 最大选择图片数目，默认6
    isCamera: true,         // 是否允许用户在内部拍照，默认true
    isCrop: false,          // 是否允许裁剪，默认false
    isGif: false,           // 是否允许选择GIF，默认false，暂无回调GIF数据
    showCropCircle: false,  // 是否显示圆形裁剪区域，默认false
    showCropFrame: true,    // 是否显示裁剪区域，默认true
    showCropGrid: false     // 是否隐藏裁剪区域网格，默认false
};

export default class SelectAdressView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };

  }

  onPressImageItem = () => {
    this.modal3.open();
  }

  Selct = () => {
    SyanImagePicker.showImagePicker(options, (err, selectedPhotos) => {
      if (err) {
        // 取消选择
        return;
      }
      // 选择成功，渲染图片
      // ...
    })
    this.modal3.close();
  }

  SelctPhoto = () => {
    this.modal4.open();
  }

  onChangeText = (text) => {
    if (text && text.length >= 500) {
      this.setState({ content: text.substr(0, 500) });
      Toast.info('最多输入500字');
    } else {
      this.setState({ content: text });
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <NavBar title="维修" navigation={navigation} />

        <View style={{ height: 10 }}></View>
        <ImageCard title="维修区域" onPress={this.onPressImageItem} textfont="公共区域" avatar="" />

        <ImageCard title="维修时间" onPress={this.onPressImageItem} textfont="2018-06-09 14: 00" avatar="" />

        <View style={{ height: 191, backgroundColor: 'white', marginTop: 10 }}>
          <View style={{ height: 88, borderWidth: device.hairlineWidth, marginHorizontal: 15, marginTop: 12, marginBottom: 8, borderColor: '#ECECEC' }}>
            <TextInput
              placeholder="请输入问题详情，已便我们更好的处理"
              underlineColorAndroid="transparent"
              style={styles.TextInputStyle}
              onChangeText={this.onChangeText}
              multiline
              maxLength={500}
            />
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
            <TouchableOpacity onPress={this.SelctPhoto}>
              <Image source={{ uri: 'city' }} style={{ width: 60, height: 60, marginLeft: 15, marginRight: 15 }} />
            </TouchableOpacity>
            <View>
              <Text style={{ fontSize: 14, color: '#777777' }}>上传图片</Text>
              <Text style={{ fontSize: 10, color: '#999999', marginTop: 5 }}>清晰的画面使我们检测问题的关键</Text>
            </View>
          </View>
        </View>

        <Modal style={[styles.modal, styles.modal3]} position="bottom" ref={view => this.modal3 = view} >
          <View style={{ width: device.width, height: device.height * 0.2 }}>
            <TouchableOpacity
              style={styles.modaltouch}
              onPress={() => this.Selct()}>
              <Text>公共区域</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: device.height * 0.065 }} onPress={() => this.Selct()}>
              <Text>非公共区域</Text>
            </TouchableOpacity>
            <View style={{ backgroundColor: '#f2f2f2', height: device.height * 0.012 }} />
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: device.height * 0.055 }} onPress={() => this.Selct()} >
              <Text>取消</Text>
            </TouchableOpacity>
          </View>
        </Modal>

           <Modal style={[styles.modal, styles.modal3]} position="bottom" ref={view => this.modal4 = view} >
          <View style={{ width: device.width, height: device.height * 0.2 }}>
            <TouchableOpacity
              style={styles.modaltouch}
              onPress={() => this.Selct()}>
              <Text>拍照</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: device.height * 0.065 }} onPress={() => this.Selct()}>
              <Text>相册</Text>
            </TouchableOpacity>
            <View style={{ backgroundColor: '#f2f2f2', height: device.height * 0.012 }} />
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: device.height * 0.055 }} onPress={() => this.Selct()} >
              <Text>取消</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextInputStyle: {
    marginHorizontal: 10,
    fontSize: 14,
    height: 84,
    textAlignVertical: 'top',
    padding: 0,
    marginTop: 0,
    marginBottom: 10,
    width: device.wdth * 0.88,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal3: {
    height: device.height * 0.2,
    width: device.width,
    backgroundColor: 'white',

  },
  modaltouch: {
    alignItems: 'center', justifyContent: 'center', height: device.height * 0.065, borderBottomWidth: device.height * 0.003, borderBottomColor: '#f2f2f2',
  },
})