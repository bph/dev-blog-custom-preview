<?php
/**
 * Plugin Name: Social Card Preview
 * Description: Adds a "Social Card Preview" option to the editor Preview dropdown, showing how the post will appear when shared on social media.
 * Version: 1.0.0
 * Requires at least: 6.7
 * Requires PHP: 7.4
 * Author: Developer Blog
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: social-card-preview
 *
 * @package SocialCardPreview
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue editor assets for the social card preview.
 */
function social_card_preview_enqueue_editor_assets() {
	$asset_file = plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	if ( ! file_exists( $asset_file ) ) {
		return;
	}

	$asset = include $asset_file;

	wp_enqueue_script(
		'social-card-preview-editor',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		$asset['dependencies'],
		$asset['version'],
		true
	);

	wp_enqueue_style(
		'social-card-preview-editor',
		plugin_dir_url( __FILE__ ) . 'build/style-index.css',
		array(),
		$asset['version']
	);
}
add_action( 'enqueue_block_editor_assets', 'social_card_preview_enqueue_editor_assets' );
