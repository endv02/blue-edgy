<?php

class Blue_Edgy_Tinymce {

    public function __construct() {
        add_action('admin_head', array(&$this, 'admin_head'));
        //add_action( 'admin_init', array(&$this, 'add_editor_style'));
    }

    public function admin_head() {
        if (current_user_can('edit_posts') && current_user_can('edit_pages')) {
            add_filter('mce_external_plugins', array(&$this, 'mce_external_plugins'));
            add_filter('mce_buttons', array(&$this, 'mce_buttons'));
            add_filter('mce_buttons_2', array(&$this, 'mce_buttons_2'));
            
        }
    }

    public function mce_external_plugins($plugin_array) {
        $plugin_array['blue_edgy_mce_box'] = sprintf('%s/js/mce/box/plugin.js', get_template_directory_uri());
        $plugin_array['table'] = sprintf('%s/js/mce/table/plugin.js', get_template_directory_uri());

        return $plugin_array;
    }

    public function mce_buttons($buttons) {
        $end = array_pop($buttons);
        array_push($buttons, 'table');
        array_push($buttons, 'box');
        array_push($buttons, $end);
        return $buttons;
    }

    public function mce_buttons_2( $buttons ) {
        array_unshift( $buttons, 'styleselect' );
        return $buttons;
    }
    
    public function add_editor_style() {
        add_editor_style('custom-editor-style.css');
    }
    
}

new Blue_Edgy_Tinymce();
