
class Player {
    constructor(UserName, SkinID) {
        this.skinID    = SkinID || 0;
        this.UserName  = UserName;
        // 
        this.Points    = 0;  
        // 
        this.WeaponID  = 0;
        this.ArmorID   = 0;
        // 
        this.Health    = 100;

        this.state = "idle";
    }

    // Points 
    AddPoints(Amount) {
        this.Points = this.Points + Amount;
    }
    
    RemovePoints(Amount) {
        this.Points = this.poinPointsts - Amount;
    }

    // Armory
    ChangeArmor(ID) {
        this.ArmorID = ID
    }

    ChangeWeapon(ID) {
        this.WeaponID = ID
    }
}