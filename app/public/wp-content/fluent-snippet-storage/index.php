<?php
if (!defined("ABSPATH")) {return;}
/*
 * This is an auto-generated file by Fluent Snippets plugin.
 * Please do not edit manually.
 */
return array (
  'published' => 
  array (
    '1-bouton-add.php' => 
    array (
      'name' => 'bouton add',
      'description' => 'bouton add',
      'type' => 'js',
      'status' => 'published',
      'tags' => 'bouton add',
      'created_at' => '',
      'updated_at' => '2024-02-13 17:00:10',
      'run_at' => 'wp_head',
      'priority' => 1,
      'group' => 'bouton add',
      'condition' => 
      array (
        'status' => 'yes',
        'run_if' => 'assertive',
        'items' => 
        array (
          0 => 
          array (
            0 => 
            array (
              'source' => 
              array (
                0 => 'page',
                1 => 'url',
              ),
              'operator' => 'contains',
              'value' => 'http://localhost/wordpress/commander/',
            ),
          ),
        ),
      ),
      'file_name' => '1-bouton-add.php',
    ),
    '2-hidden-separator.php' => 
    array (
      'name' => 'hidden separator',
      'description' => 'hidden separator',
      'type' => 'js',
      'status' => 'published',
      'tags' => '',
      'created_at' => '',
      'updated_at' => '2024-02-15 22:27:46',
      'run_at' => 'wp_footer',
      'priority' => 10,
      'group' => '',
      'condition' => 
      array (
        'status' => 'no',
        'run_if' => 'assertive',
        'items' => 
        array (
          0 => 
          array (
            0 => 
            array (
              'source' => 
              array (
                0 => 'page',
                1 => 'url',
              ),
              'operator' => 'contains',
              'value' => 'http://localhost:10029/commander/',
            ),
          ),
        ),
      ),
      'file_name' => '2-hidden-separator.php',
    ),
  ),
  'draft' => 
  array (
  ),
  'hooks' => 
  array (
    'wp_head' => 
    array (
      0 => '1-bouton-add.php',
    ),
    'wp_footer' => 
    array (
      0 => '2-hidden-separator.php',
    ),
  ),
  'meta' => 
  array (
    'secret_key' => '83c2cb3f49f74f68da03e7a94304584d',
    'force_disabled' => 'no',
    'cached_at' => '2024-02-15 22:27:46',
    'cached_version' => '10.33',
    'cashed_domain' => 'http://localhost:10029',
    'legacy_status' => 'new',
    'auto_disable' => 'yes',
    'auto_publish' => 'no',
    'remove_on_uninstall' => 'no',
  ),
  'error_files' => 
  array (
  ),
);