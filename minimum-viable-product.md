#Minimum Viable Product

###Mechanics
 * [ ] Decent looking UI (light? dark? solarized?)  
 * [ ] When players connect, a new character is made for them in the main world  
 * [ ] One biome (grasslands) that generates one type of tile  
 * [ ] Players can see each other move (in real time)  
 * [ ] Wandering entities
 * [ ] Layers for each biome that are rendered
 * [ ] Hit boxes
 * [ ] Structure in place for having usernames?

###Layers
> we need to decide how layers are going to work, this is my idea though:  

 * Above 
    *  Leaves
 * Entities  
 * Props (moveable and immovable)  
    * Furniture
    * Structures
 * Below  
    * Terrain

###World Terminology
    ______WORLD___________________________________________________________
                                                                          |
    _____ REGION ____________________ _________________________________   |
    |###############################| |###############################|   |
    |#### ENTITY ##[]###############| |###############################|   |
    |###############################| |###############################|   |
    |#### PROP ####0################| |###############################|   |
    |###############################| |###############################|   |
    |###############################| |###############################|   |
    |###############################| |###############################|   |
    |###############################| |###############################|   |
    ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯   |
    _________________________________ _________________________________   |
    |###############################| |###############################|   |
    |###############################| |###############################|   |
    |###############################| |###############################|   |
    |###############################| |###########_____###############|   |
    |###############################| |###########|...|###############|   |
    |###############################| |###########|...|###############|   |
    |###############################| |###########¯¯¯¯¯###############|   |
    |###############################| |###############################|   |
    ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯   |

###Rendering Options
> Is this for after we have everything in place, then we can start to ?

 * Replace the content of a bunch of spans with jQuery `$('span-id').text("#");`
 * Use css `attr` and change a `data-tile="#"` attribute, change the attribute with jquery (I'm not sure if this would give more speed
 * Use a canvas to render text

###Bonus Ideas
 * Create our own font of characters so we can just send "a" and it'll be a rough texture

