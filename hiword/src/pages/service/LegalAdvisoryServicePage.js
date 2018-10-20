import React,{Component} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import NavBar from '../../componment/NavBar';
import device from '../../componment/device';
import Line from '../../componment/Line';

export default class LegalAdvisoryServicePage extends Component {

  render() {
    const {navigation} = this.props
    return(
      <View style={styles.container}>
        <NavBar
          navigation={navigation}
          title="法律咨询服务"
        />
        <View style={{ height: 10}}></View>
        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={styles.viewstyle}>
          
          <Text style={styles.titlestyle}>法律服务内容:</Text>
          <Text style={styles.textstyle}>律师为公司提供非诉及诉讼的法律服务，会涉及公司运作的方方面面</Text>

          <Text style={styles.titlestyle}>具体如下:</Text>
          <Text style={styles.textstyle}>(一) 公司与员工之间关系（劳动关系）处理的法律服务 1、提供与劳动相关的法律咨询（口头或书面）；  2、起草、修改劳动合同及其相关的企业规章制度〈包括考勤制度、薪酬制度、休假制度、绩效制度、培训制度等〉。  3、参与劳动合同谈判；  4、提供具有建设性、可操作性的劳动争议、纠纷预防方案；  5、代理劳动仲裁和诉讼案件，包括调解、仲裁、诉讼、执行各阶段，具体为诉前调查、申请保全措施，代为提起劳动仲裁、劳动诉讼程序、进行答辩、提起反诉、参与庭审、调解与和解、参与执行等；   6、已发生劳动争议分析，预防办法及法律对策提供，出具律师函、法律意见书；  7、为贵司相关人士提供劳动法方面的法律培训。</Text>
          <Text style={[styles.textstyle, {marginTop: 10}]}>（二）公司业务关系方面的法律服务  1、提供与业务相关的法律咨询（口头或书面）；  2、起草、修改与公司业务相关的各类合同，提出修改意见或者补充法律建议；   3、参与合同谈判，制定谈判策略与方案；  4、提供客户的工商调查、资产（房产、车辆等）调查；  5、协助公司审查重大经济项目以及其他重要的法律文书并根据企业的要求出具法律意见书、出具律师函；  6、代理民商事仲裁和诉讼案件，包括调解、仲裁、诉讼、执行各阶段，具体为诉前调查、申请保全措施，代为提起仲裁或诉讼、进行答辩、提起反诉、参与庭审、调解与和解、参与执行等；  7、为贵司相关人士提供合同法方面的法律培训</Text>
          </View>
        </ScrollView>
        <View style={{ position: 'absolute', bottom: 0, backgroundColor: '#4087EE', height: 45, width: device.width, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={[styles.textstyle, {color: 'white'}]}>预  约</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlestyle: {
    fontSize: 16,
    color: '#444444',
    marginTop: 15,
    marginBottom: 10,
  },
  textstyle: {
    fontSize: 14,
    color: '#999999',
    lineHeight: 20,
  },
  viewstyle: {
    marginHorizontal: 15,
    marginBottom: 80,
  }
})


