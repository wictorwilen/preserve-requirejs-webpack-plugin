function PreserveRequireJs(options) {
}

PreserveRequireJs.prototype.apply = function (compiler) {
    compiler.plugin("compilation", function (compilation, data) {
        data.normalModuleFactory.plugin("parser", function (parser, options) {
            parser.plugin("call requirejs.config", function (expr) {
                var param = this.evaluateExpression(expr.arguments[0]);
                return false;
            });;
        });
    });
};

module.exports = PreserveRequireJs;