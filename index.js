function PreserveRequireJs(options) {
}

PreserveRequireJs.prototype.apply = function (compiler) {
    compiler.parser.plugin("call requirejs.config", function (expr) {
        var param = this.evaluateExpression(expr.arguments[0]);
        return false;
    });
};

module.exports = PreserveRequireJs;