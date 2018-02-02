class Players{
  constructor(
    name,
    court,
    height,
    weight,
    stamina,
    jump,
    rebound,
    speed
  ){
    this.name = name
    this.court = court
    this.height = height
    this.weight = weight
    this.stamina = 20
    this.jump = 80
    this.rebound =
    this.speed = speed || 0
  }

}


class frontcourt extends Players{
  constructor(
    name,
    height,
    weight,
    stamina,
    jump,
    rebound,
    speed
    block,
    screent
  ){
   super(name, "frontcourt", height, weight, stamina, speed)
   this.block = block
   this.screent = screent


 }
}

class backcourt extends Players{
  constructor(
    name,
    height,
    weight,
    stamina
    speed
  ){
    super(
      name,
      "backcourt",
      height,
      weight,
      stamina,
      speed,
      drive
      handling,
      steal
    )
    this.drive = drive
    this.handling = handling
    this.steal = steal
  }
}

class PointGuard extends backcourt{
  constructor(
    name,
    height,
    weight,
    stamina,
    speed,
    drive,
    handling,
    steal
    
  ){
    super(
      name,
      height,
      weight,
      stamina,
      speed,
      drive,
      handling,
      steal
    )

  }
}
