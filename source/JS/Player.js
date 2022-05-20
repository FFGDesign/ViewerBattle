
class Player {
    constructor(UserName, SkinID) {
        this.skinID    = SkinID || 0;
        this.UserName  = UserName;
        // 
        this.Field     = 0;
        this.LastField = 0;
        // 
        this.Dice      = 1;
        this.LastDice  = 1;
        // 
        this.Loop      = 0;
        // 
        this.Points    = 0;  
        // 
        this.WeaponID  = 0;
        this.ArmorID   = 0;
        // 
        this.Health    = 100;
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

    // Dice
    RollTheDice() {
        this.LastDice = this.Dice;
        this.Dice = Math.round(Math.random()*6)
    }

    MoveToField(FieldID) {
        this.LastField = this.Field
        this.Field = FieldID
    }

    TakeDamage(Damage) {

    }
}