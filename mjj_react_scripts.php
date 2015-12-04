<?php
/**
 * Plugin Name: MJJ React scripts
 * Version: 0.1-alpha
 * Description: This simply generates the js file includes React and 
 * Author: JJ Jay
 * Text Domain: mjj-react-scripts
 * Domain Path: /languages
 * @package mjj-react-scripts
 */

MJJ_React_Scripts::get_instance();

class MJJ_React_Scripts{

	protected static $instance = null;

	public static function get_instance() {

		// If the single instance hasn't been set, set it now.
		if ( null == self::$instance ) {
			self::$instance = new self;
		} // end if

		return self::$instance;

	} // end get_instance

	private function __construct(){
		add_action( 'wp_enqueue_scripts', array( 'MJJ_React_Scripts', 'add_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( 'MJJ_React_Scripts', 'add_styles' ) );
	}

	public static function add_styles() {
	}

	public static function add_scripts() {

			$suffix = ( defined('SCRIPT_DEBUG') && SCRIPT_DEBUG ) ? '' : '.min'; //.min
			wp_register_script( 'mjj-react-scripts', plugin_dir_url( __FILE__ ) . 'js/mjj-react-scripts' . $suffix . '.js', array(), date('Ymd'), false );
	} // end add_scripts
}