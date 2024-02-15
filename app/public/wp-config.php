<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          ';:M3@a8zXIfD^mjpFC@,FfxV.F.`>[87.B;zHQ{Y: 1Z`:61~lTCYFi<!FjYBRK*' );
define( 'SECURE_AUTH_KEY',   'AM4t1mFvIK<yy>%=^j%m9Y$E74A*Ky$Ljw<R| OvL]GdNk UqU}0YSYT$LXZ:D7E' );
define( 'LOGGED_IN_KEY',     'r}R1~X|xE?<IjTq1G]c?}+e%gb?fs&yt9O2vo>t%@0xtc| Yh?[qA08fNhyByUN~' );
define( 'NONCE_KEY',         'I7Bv[@#a[.PY6>]M>spT1UX%L/t]*M1Nx3.:Ig=B57jlD+xP2{~p#F-b&f}9D?ZE' );
define( 'AUTH_SALT',         'KvpgX~j,;*f65x$@^%^cpcvOE]WPz3jQgmn)`7]PBv9}|}L.eb2QLw}5R#eaoeF5' );
define( 'SECURE_AUTH_SALT',  'T6AluN,~4p>|wUaLXnX>YFkz$>=E2G4H%C{`KVWo.19:9D#~4V| ;qP63d.63*V:' );
define( 'LOGGED_IN_SALT',    'e|$i|:[N:`zG=d0xh5SjVts?-lIs0G~;+gy>3uKEtJhj}(6Z[eBj=RtHMW*fd}gv' );
define( 'NONCE_SALT',        'AfhH<RaUn-+~AB3+H$YD)>0v542hwDpaun]dul%~q)i4;O3/Ij7k|N$d4do{(laY' );
define( 'WP_CACHE_KEY_SALT', '5T9UH mOut|),+MEHZ4FN(+l/:GG=PW{*MUg#OU^`Isfh9&Aweq>bo+`I{Zrg/&|' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
