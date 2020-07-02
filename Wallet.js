class Wallet {
    constructor(money) {
        let _money = money;
        //collection actual resources
        this.getWalletValue = () => _money;

        //checking if player has enougth money to play

        this.checkCanPlay = value => {
            if (_money >= value) return true;
            return false;
        }

        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("invalid activity type")
                }

            } else {
                console.log(typeof value);
                throw new Error("invalid number")
            }
        }

    }

}

// const wallet = new Wallet(200)