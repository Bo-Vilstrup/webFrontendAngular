/**
 * Created by bo on 10/8/16.
 */
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';


var comnand = "http-server -a " +server_ip_address+ " -p " +server_port+ "-c-1 ./app";

var sys = require('sys');
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) };
exec(comnand, puts);
