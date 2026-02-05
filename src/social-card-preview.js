/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Modal } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';
import { store as coreStore } from '@wordpress/core-data';

const SocialCardPreview = ( { onClose } ) => {
	const { title, excerpt, imageUrl, siteUrl } = useSelect( ( select ) => {
		const { getEditedPostAttribute } = select( editorStore );
		const featuredMediaId = getEditedPostAttribute( 'featured_media' );

		let featuredImageUrl = '';
		if ( featuredMediaId ) {
			const media = select( coreStore ).getMedia( featuredMediaId );
			featuredImageUrl =
				media?.media_details?.sizes?.large?.source_url ||
				media?.source_url ||
				'';
		}

		return {
			title: getEditedPostAttribute( 'title' ) || '',
			excerpt: getEditedPostAttribute( 'excerpt' ) || '',
			imageUrl: featuredImageUrl,
			siteUrl: select( coreStore ).getSite()?.url || '',
		};
	}, [] );

	const domain = siteUrl ? new URL( siteUrl ).hostname : '';
	const truncatedExcerpt =
		excerpt.length > 200 ? excerpt.substring( 0, 200 ) + '…' : excerpt;

	return (
		<Modal
			title={ __( 'Social Card Preview', 'social-card-preview' ) }
			onRequestClose={ onClose }
			size="medium"
		>
			<div className="social-card-preview">
				<h3 className="social-card-preview__heading">
					{ __( 'X / Twitter', 'social-card-preview' ) }
				</h3>
				<div className="social-card-preview__card social-card-preview__card--twitter">
					{ imageUrl && (
						<img
							className="social-card-preview__image"
							src={ imageUrl }
							alt=""
						/>
					) }
					<div className="social-card-preview__content">
						<span className="social-card-preview__domain">
							{ domain }
						</span>
						<span className="social-card-preview__title">
							{ title }
						</span>
						<span className="social-card-preview__description">
							{ truncatedExcerpt }
						</span>
					</div>
				</div>

				<h3 className="social-card-preview__heading">
					{ __( 'Facebook', 'social-card-preview' ) }
				</h3>
				<div className="social-card-preview__card social-card-preview__card--facebook">
					{ imageUrl && (
						<img
							className="social-card-preview__image"
							src={ imageUrl }
							alt=""
						/>
					) }
					<div className="social-card-preview__content">
						<span className="social-card-preview__domain">
							{ domain }
						</span>
						<span className="social-card-preview__title">
							{ title }
						</span>
						<span className="social-card-preview__description">
							{ truncatedExcerpt }
						</span>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default SocialCardPreview;
