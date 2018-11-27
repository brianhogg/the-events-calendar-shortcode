const { Component, Fragment } = wp.element;

/**
 * Outputs the preview mode of the block
 */
export default class BlockPreview extends Component {
	render() {
		const { attributes } = this.props;

		const attributeRows = Object.keys( attributes ).map( ( key ) => {
			return (
				<tr key={ key }>
					<td width={ '50%' }>{ key }</td>
					<td width={ '50%' }>{ attributes[ key ] }</td>
				</tr>
			);
		} );

		return (
			<Fragment>
				<table>
					<thead>
						<tr>
							<th align={ 'left' } width={ '50%' }>Name</th>
							<th align={ 'left' } width={ '50%' }>Values</th>
						</tr>
					</thead>
					<tbody>
						{ attributeRows }
					</tbody>
				</table>
			</Fragment>
		);
	}
}
