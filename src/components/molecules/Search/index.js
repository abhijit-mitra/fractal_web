import React, { PureComponent } from 'react';
import {Input, Menu,MenuItem} from '../../atoms';

class Search extends PureComponent {
  constructor(props) {
    super(props);
    const {value, config} = props;
    this.state = {
      queryString:value[config.displayTextBy],
      id:value[config.setValueBy],
      data:[],
    };
  }
  handleSearch=(e)=>{
    const {searchData, config} = this.props;
    const {value} =e.target;
    const new_data = searchData.filter((elm)=>(elm[config.displayTextBy].indexOf(value)!==-1));
    this.props.onSearch(value);
    this.setState({queryString:value, data:new_data, isSearching:true})
  }
  onBlur=(e)=>{
    setTimeout(()=>{
      this.setState({data:[]},()=>{
        const {id, queryString} = this.state;
        this.props.onSearchComplete(id, queryString);
      });
    },10)
  }
  handleMenuItemClick=(id, label)=>(e)=>{
    this.setState({queryString:label, id:id, data:[]});
  }
  render() {
    const {queryString, data} = this.state;
    const {prepend, append, config} = this.props;
    return (
      <div className="search">
        <div className="dropdown">
          <Input
            onChange={this.handleSearch}
            value={queryString}
            onBlur={this.onBlur}
            prepend={prepend}
            append={append}
          />
          {data.length>0 && <Menu>
            {data.map((each_data, index)=>(
              <MenuItem
                key={index}
                label={each_data[config.displayTextBy]}
                id={each_data[config.setValueBy]}
                onClick={this.handleMenuItemClick(
                  each_data[config.setValueBy], each_data[config.displayTextBy]
                )}/>
            ))}
          </Menu>}
        </div>
      </div>
    );
  }

}

Search.defaultProps={
  'prepend':null,
  'append':null,
  'searchData':[]
}

export default Search;
