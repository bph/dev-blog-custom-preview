/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { PluginPreviewMenuItem } from '@wordpress/editor';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import SocialCardPreview from './social-card-preview';
import './style.css';

const SocialCardPreviewMenuItem = () => {
	const [ isOpen, setIsOpen ] = useState( false );

	return (
		<>
			<PluginPreviewMenuItem
				onClick={ () => setIsOpen( true ) }
			>
				{ __( 'Social Card Preview', 'social-card-preview' ) }
			</PluginPreviewMenuItem>
			{ isOpen && (
				<SocialCardPreview
					onClose={ () => setIsOpen( false ) }
				/>
			) }
		</>
	);
};

registerPlugin( 'social-card-preview', {
	render: SocialCardPreviewMenuItem,
} );
