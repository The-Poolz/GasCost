## Algorithm implementations: 
**Classic search:**
```solidity
function theTypeOf(uint256 amount) public view returns (uint8 theType) { 
     for (uint8 i = 0; i < typesCount; ++i) { 
         if (amount <= typeToProviderData[i].limit) { 
             theType = i; 
             break; 
         } 
     } 
 } 
```
**Binary search:**
```solidity
function binaryTypeOf(uint256 amount) public view returns (uint8 theType) { 
     uint8 low = 0; 
     uint8 high = typesCount; 
     while (low < high) { 
         uint8 mid = low + (high - low) / 2; 
         uint256 midLimit = typeToProviderData[mid].limit; 
         if (amount <= midLimit) { 
             high = mid; 
             theType = mid; // Set the result, but continue the search in case there is a smaller match 
         } else { 
             low = mid + 1; 
         } 
     } 
 } 
```
## Case if we have 3 tiers.

**Classic linear search results:**
```
Find 0 element: 4410 gas cost
Find 1 element: 6951 
Find 2 element: 9492 
```
**Binary search results:**
```
Find 0 element: 8027
Find 1 element: 8209
Find 2 element: 8391
```

## Case if we have 4 tiers.

**Classic linear search results:**
```
Find 0 element: 4410 gas cost
Find 1 element: 6951 
Find 2 element: 9492 
Find 3 element: 12033
```
**Binary search results:**
```
Find 0 element: 10941
Find 1 element: 11123
Find 2 element: 8209
Find 3 element: 8209
```

## Case if we have 5 tiers. 

**Classic linear search results:**
```
Find 0 element: 4410 gas cost
Find 1 element: 6951 
Find 2 element: 9492 
Find 3 element: 12033
Find 4 element: 14574
```
**Binary search results:**
```
Find 0 element: 10941
Find 1 element: 11123
Find 2 element: 8209
Find 3 element: 11123
Find 4 element: 11305
```
## Case if we have 10 tiers.

**Classic linear search results:**
```
Find 0 element: 4410
Find 1 element: 6951
Find 2 element: 9492 
Find 3 element: 12033
Find 4 element: 14574
Find 5 element: 17115
Find 6 element: 19656
Find 7 element: 22197
Find 8 element: 24738
Find 9 element: 27279
```
**Binary search results:**
```
Find 0 element: 13855
Find 1 element: 14037
Find 2 element: 11123 
Find 3 element: 14037
Find 4 element: 14219
Find 5 element: 11305
Find 6 element: 14037
Find 7 element: 14219
Find 8 element: 11305
Find 9 element: 11305
```

## Case if we have 15 tiers
**Classic linear search results:**
```
Find 0 element: 4410
Find 1 element: 6951
Find 2 element: 9492 
Find 3 element: 12033
Find 4 element: 14574
Find 5 element: 17115
Find 6 element: 19656
Find 7 element: 22197
Find 8 element: 24738
Find 9 element: 27279
Find 10 element: 29820
Find 11 element: 32361
Find 12 element: 34902
Find 13 element: 37443
Find 14 element: 39984
```

**Binary search results:**
```
Find 0 element: 13855
Find 1 element: 14037
Find 2 element: 14037
Find 3 element: 14219
Find 4 element: 14037
Find 5 element: 14219
Find 6 element: 14219
Find 7 element: 14401
Find 8 element: 14037
Find 9 element: 14219
Find 10 element: 14219
Find 11 element: 14401
Find 12 element: 14219
Find 13 element: 14401
Find 14 element: 14401
```