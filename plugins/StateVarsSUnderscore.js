class StateVarsSUnderscore {
    constructor(reporter, config) {
        this.ruleId = 'state-vars-s-underscore';
        this.reporter = reporter;
        this.config = config;
    }

    StateVariableDeclaration(ctx) {
        const { variables } = ctx;
        for (let i = 0; i < variables.length; i++) {
            if (!variables[i].name.startsWith('s_')) {
                this.reporter.error(
                    variables[i],
                    this.ruleId,
                    `State variables must be prefixed with "s_"`);
            }
        }
    }
}

module.exports = StateVarsSUnderscore;
