/* 
let isActive = false;
let showGreen = () => console.log('Show Green Light');
let showRed = () => console.log('Show Red light');

এই প্রোগ্রামে isActive ভ্যারিয়েবলটি true হলে showGreen() ফাংশানটি দেখাবে এবং false হলে showRed( ) ফাংশানটি কল করবে, if/else বাদ দিয়ে ternary অপারেটর দিয়ে শর্টকার্টে করে দেখাও। 

*/

let isActive = false;
let showGreen = () => console.log('Show Green Light');
let showRed = () => console.log('Show Red light');

isActive ? showGreen() : showRed();