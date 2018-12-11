import settingsConfig from './config/settings';
import Block from './containers/block';

const { __ } = wp.i18n;
const { applyFilters } = wp.hooks;
const {	registerBlockType } = wp.blocks;

registerBlockType( 'events-calendar-shortcode/block', {
	title: __( 'Events Calendar Shortcode', 'events-calendar-shortcode' ),
	icon: 'calendar',
	category: 'common',
	supports: {
		html: false,
	},

	edit: ( props ) => {
		return (
			<Block
				settingsConfig={ applyFilters( 'ecs.settingsConfig', settingsConfig ) }
				{ ...props }
			/>
		);
	},

	save: () => {
		return null;
	},
} );
