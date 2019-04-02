import React from 'react';
import {FormattedDate, FormattedRelative, 
  FormattedNumber, FormattedPlural, FormattedMessage} from 'react-intl';

export default class Job extends React.Component {

  	render() {
      let millionMsg = <FormattedMessage id="Million"/>
      let millionsMsg = <FormattedMessage id="Millions"/>
  		return (
  			<tr>
  				<th scope="row">{this.props.offer.id}</th>
      			<td><FormattedMessage id={this.props.offer.name}/></td>
  				  <td>{this.props.offer.company}</td>
      			<td>
              {this.props.offer.salary + " "} 
              <FormattedPlural
                value={this.props.offer.salary}
                one={millionMsg}
                other={millionsMsg}
                />
            </td>
      			<td>{this.props.offer.city}</td>
      			<td>
              <FormattedDate
                value={new Date(this.props.offer.date)}
                year='numeric'
                month='long'
                day='numeric'
                weekday='long'
              />
              <p>
                (<FormattedRelative value={new Date(this.props.offer.date)}/>)
              </p>
            </td>
            <td><FormattedNumber value={this.props.offer.views}/></td>
  			</tr>
  		);
	}
}