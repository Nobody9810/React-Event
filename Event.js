
//befor start this file, pls add antd first from ur terminal 
// add npm antd   or 
import React, { Component, Fragment,} from 'react';
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import { Input,Button,Select,DatePicker,PageHeader, Descriptions } from 'antd';
import './css.css'


class Event extends Component{

    constructor(props){
        super(props);
        this.state = {
            NameValue:'',  
            AddressValue:'',
            PhoneValue:'',
            EmailValue:'',
            EventVenue:'',
            Date:'',
           
          }
         }
        
    render(){
        return(
          <Fragment>
            
          
            <h1 className ='head'> Welecome To IIUM Event System </h1>
          
            <div>
               <div className='mian' id='id'>
               <h2>Event Information</h2>
                <Input
                className='NameInput'
                placeholder='Name'
                prefix={<UserOutlined/>} 
                value={this.state.NameValue}
                onChange={this.handleInputChange.bind(this)}/>
             <p>
                <Input
                className='AddressInput'
                placeholder='Address' 
                value={this.state.AddressValue}
                onChange={this.handleAddressChange.bind(this)}/>
          </p>
          <p>
                <Input
                className='PhoneInput'
                placeholder='Phone' 
                onChange={this.handlePhoneChange.bind(this)}/>
          </p>
          <p>
               <Input
               className='EmailInput'
               placeholder='Email' 
               value={this.state.EmailValue}
               onChange={this.handleEmailChange.bind(this)}/>
          </p>       
              <p> 
 <Select 
 defaultValue= 'EventVenue'
 onChange={this.handleSelectChange.bind(this)}>
<Select.Option value="EventVenue">EventVenue</Select.Option>
<Select.Option value="KICT MAIN HALL">KICT MAIN HALL</Select.Option>
<Select.Option value="ECONS MAIN HALL">ECONS MAIN HALL</Select.Option>
<Select.Option value="LAW MAIN COURT">LAW MAIN COURT</Select.Option>
<Select.Option value="CAS">CAS</Select.Option>
   </Select>
          </p> 
               <DatePicker style={{ width: 100 }}
                           value={this.state.Date}
                           onChange={this.handleDateChange.bind(this)} />
               
              
               <Button 
                type="primary"
                onClick={this.handleBtnClick.bind(this)}>Submit</Button>
            
             </div>    
 
             </div>

            
    <div className="Detail" id='id'>
    <PageHeader
      ghost={false}
      title="Event"
      subTitle="This Is Your Event Details">
      <Descriptions size="small" column={3}>
        <Descriptions.Item>Name:   {this.state.outputName}</Descriptions.Item>
        <Descriptions.Item >Address:   {this.state.outputAddress}</Descriptions.Item>
        <Descriptions.Item >Phone:   {this.state.outputPhone}</Descriptions.Item>
        <Descriptions.Item >Email:   {this.state.outputEmail}</Descriptions.Item>
        <Descriptions.Item >EventVenue：  {this.state.outputEventVenue}</Descriptions.Item>
        <Descriptions.Item >Date：{this.state.outputDate}</Descriptions.Item>
        
      </Descriptions>
      <Button key="1" type="primary"
      onClick={this.handleconfirmclick.bind(this)}>Confirm</Button>
    </PageHeader>
    </div>   
  
 
          </Fragment>
         
       )}    

handleInputChange(e) {
    this.setState({
      NameValue:e.target.value,
});
}
handleAddressChange(e){

  this.setState({
    AddressValue:e.target.value,
  })
}
handlePhoneChange(e){
  this.setState({
    PhoneValue:e.target.value,
  })
}
handleEmailChange(e){
 
  this.setState({
    EmailValue:e.target.value
  });
}
handleSelectChange(m){
 
  this.setState({
    EventVenue:m
  })
}  
handleDateChange (n){
  console.log(n)
 this.setState({
  Date:n
 })
}



handleBtnClick() {
  this.setState ({
            outputName : this.state.NameValue.toUpperCase(),
            outputAddress: this.state.AddressValue.toUpperCase(),
            outputPhone:this.state.PhoneValue,
            outputEmail:this.state.EmailValue,
            formValue:this.state.listData,
            outputEventVenue:this.state.EventVenue,
            outputDate: this.state.Date.toString(),
            NameValue:'',
            AddressValue:'',
            PhoneValue:'',
            EmailValue:'',
            Date:''

      
    });
}
handleconfirmclick(){
  this.setState({
    
  })
}

  




}
export default Event;



