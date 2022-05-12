# Ability Stone Calculator for Lost Ark

This mini-project provides an interface allowing users to simulate the possible engraving actions on an ability stone and proposing the next action to make depending on the objectives entered by the user.

## How does it work ?

The decisionnal algorithm takes the input objectives of the user and compute the probabilities of achieving these objectives and shows them on each engraving line given that would be the next user's try.
Then at the end of the engraving pannel, the algorithm proposes the next best move to make taking into account the probabilities previously determined.

### 1. Choose the rarity of the stone

As you may know, the rarity of the stone provides the number of tries per engraving line on a stone.
Note: you can modify this setting at any given time, though it will reset the previous sequence of tries.

### 2. Choose the objectives you wish for the 3 rows

Ideally we want a 6-6-4 for a 4 engraving lines build or a 7-7-4 for a 5 engraving lines build. But if you only look for 1 engraving line on the stone to make a 2 or 3 engraving lines build then you can let the engraving row you dont care about to either 0 or 1. Same with the malus engraving row, the lower the objective is the lower the overall chances to get the stone you want get. So in regards to that fact, you can increase the 3rd row objective during the engraving process considering that you dont care about the malus row or put it to the maximum of the stone capacity.

### 3. Inform the interface with the result of your tries

After each engraving try on your stone, input the corresponding result in the engraving pannel on the corresponding row. The algorithm will then compute again the state your stone is into and provide the new percentage of success.

### 4. UI output

At each step, you will see the overall interface being modified in regards to your inputs. You'll also see the chance of success of the next action at each step.

Note: You can use this caclculator on any given stone even partially engraved since the calculator takes the current state of your stone and not the sequence of tries since it's not relevant for the objective.
