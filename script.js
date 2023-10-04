var givePendingOption = () => {
    var pending = document.createElement('option')
    pending.value = 'pending'
    pending.textContent = 'Pending'
    return pending
}

var giveRevisitOption = () => {
    var revisit = document.createElement('option')
    revisit.value = 'revisit'
    revisit.textContent = 'Revisit'
    return revisit
}

var giveDoneOption = () => {
    var done = document.createElement('option')
    done.value = 'done'
    done.textContent = 'Done'
    return done
}


function loadData() {

    let allProblems = localStorage.getItem('every')

    var easyArr, mediumArr, hardArr

    if (allProblems) {
        var res = localStorage.getItem('every')
        var everyRes = JSON.parse(res)

        // console.log('Data found in local storage : ', everyRes)

        easyArr = everyRes[0]
        mediumArr = everyRes[1]
        hardArr = everyRes[2]
    }

    else {
        easyArr = [
            {
                "solution": 'https://youtu.be/KLlXCFG5TnA',
                "topics": 'Arrays',
                "name": 'Two Sum',
                "url": 'https://leetcode.com/problems/two-sum/',
                "id": 0,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/1pkOgXD63yU',
                "topics": 'Arrays',
                "name": 'Best Time to Buy and Sell Stock',
                "url": 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
                "id": 1,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/3OamzN90kPg',
                "topics": 'Arrays',
                "name": 'Contains Duplicate',
                "url": 'https://leetcode.com/problems/contains-duplicate/',
                "id": 2,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/5WZl3MMT0Eg',
                "topics": 'Arrays',
                "name": 'Maximum Subarray',
                "url": 'https://leetcode.com/problems/maximum-subarray/',
                "id": 3,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/gVUrDV4tZfY',
                "topics": 'Binary',
                "name": 'Sum of Two Integers',
                "url": 'https://leetcode.com/problems/sum-of-two-integers/',
                "id": 4,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/5Km3utixwZs',
                "topics": 'Binary',
                "name": 'Number of 1 Bits',
                "url": 'https://leetcode.com/problems/number-of-1-bits/',
                "id": 5,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/WnPLSRLSANE',
                "topics": 'Binary',
                "name": 'Missing Number',
                "url": 'https://leetcode.com/problems/missing-number/',
                "id": 6,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/UcoN6UjAI64',
                "topics": 'Binary',
                "name": 'Reverse Bits',
                "url": 'https://leetcode.com/problems/reverse-bits/',
                "id": 7,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/Y0lT9Fck7qI',
                "topics": 'Dynamic Programming',
                "name": 'Climbing Stairs',
                "url": 'https://leetcode.com/problems/climbing-stairs/',
                "id": 8,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/73r3KWiEvyk',
                "topics": 'Dynamic Programming',
                "name": 'House Robber',
                "url": 'https://leetcode.com/problems/house-robber/',
                "id": 9,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/PaJxqZVPhbg',
                "topics": 'Interval',
                "name": 'Meeting Rooms (Leetcode Premium)',
                "url": 'https://leetcode.com/problems/meeting-rooms/',
                "id": 10,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/G0_I-ZF0S38',
                "topics": 'Linked List',
                "name": 'Reverse a Linked List',
                "url": 'https://leetcode.com/problems/reverse-linked-list/',
                "id": 11,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/gBTe7lFR3vc',
                "topics": 'Linked List',
                "name": 'Detect Cycle in a Linked List',
                "url": 'https://leetcode.com/problems/linked-list-cycle/',
                "id": 12,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/X"id"igk956u0',
                "topics": 'Linked List',
                "name": 'Merge Two Sorted Lists',
                "url": 'https://leetcode.com/problems/merge-two-sorted-lists/',
                "id": 13,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/9UtInBqnCgA',
                "topics": 'String',
                "name": 'Val"id" Anagram',
                "url": 'https://leetcode.com/problems/val"id"-anagram/',
                "id": 14,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/WTzjTskDFMg',
                "topics": 'String',
                "name": 'Val"id" Parentheses',
                "url": 'https://leetcode.com/problems/val"id"-parentheses/',
                "id": 15,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/jJXJ16kPFWg',
                "topics": 'String',
                "name": 'Val"id" Palindrome',
                "url": 'https://leetcode.com/problems/val"id"-palindrome/',
                "id": 16,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/hTM3phVI6YQ',
                "topics": 'Tree',
                "name": 'Maximum Depth of Binary Tree',
                "url": 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
                "id": 17,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/vRbbcKXCxOw',
                "topics": 'Tree',
                "name": 'Same Tree',
                "url": 'https://leetcode.com/problems/same-tree/',
                "id": 18,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/OnSn2XEQ4MY',
                "topics": 'Tree',
                "name": 'Invert/Flip Binary Tree',
                "url": 'https://leetcode.com/problems/invert-binary-tree/',
                "id": 19,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/E36O5SWp-LE',
                "topics": 'Tree',
                "name": 'Subtree of Another Tree',
                "url": 'https://leetcode.com/problems/subtree-of-another-tree/',
                "id": 20,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/gs2LMfuOR9k',
                "topics": 'Tree',
                "name": 'Lowest Common Ancestor of BST',
                "url": 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
                "id": 21,
                "status": "pending"
            }
        ]

        mediumArr = [
            {
                "solution": 'https://youtu.be/bNvIQI2wAjk',
                "topics": 'Arrays',
                "name": 'Product of Array Except Self',
                "url": 'https://leetcode.com/problems/product-of-array-except-self/',
                "id": 0,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/lXVy6YWFcRM',
                "topics": 'Arrays',
                "name": 'Maximum Product Subarray',
                "url": 'https://leetcode.com/problems/maximum-product-subarray/',
                "id": 1,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/nIVW4P8b1VA',
                "topics": 'Arrays',
                "name": 'Find Minimum in Rotated Sorted Array',
                "url": 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
                "id": 2,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/U8XENwh8Oy8',
                "topics": 'Arrays',
                "name": 'Search in Rotated Sorted Array',
                "url": 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
                "id": 3,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/jzZsG8n2R9A',
                "topics": 'Arrays',
                "name": '3Sum',
                "url": 'https://leetcode.com/problems/3sum/',
                "id": 4,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/UuiTKBwPgAo',
                "topics": 'Arrays',
                "name": 'Container With Most Water',
                "url": 'https://leetcode.com/problems/container-with-most-water/',
                "id": 5,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/RyBM56RIWrM',
                "topics": 'Binary',
                "name": 'Counting Bits',
                "url": 'https://leetcode.com/problems/counting-bits/',
                "id": 6,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/H9bfqozjoqs',
                "topics": 'Dynamic Programming',
                "name": 'Coin Change',
                "url": 'https://leetcode.com/problems/coin-change/',
                "id": 7,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/cjWnW0hdF1Y',
                "topics": 'Dynamic Programming',
                "name": 'Longest Increasing Subsequence',
                "url": 'https://leetcode.com/problems/longest-increasing-subsequence/',
                "id": 8,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/Ua0GhsJSlWM',
                "topics": 'Dynamic Programming',
                "name": 'Longest Common Subsequence',
                "url": 'https://leetcode.com/problems/longest-common-subsequence/',
                "id": 9,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/Sx9NNgInc3A',
                "topics": 'Dynamic Programming',
                "name": 'Word Break Problem',
                "url": 'https://leetcode.com/problems/word-break/',
                "id": 10,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/GBKI9VSKdGg',
                "topics": 'Dynamic Programming',
                "name": 'Combination Sum',
                "url": 'https://leetcode.com/problems/combination-sum/',
                "id": 11,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/rWAJCfYYOvM',
                "topics": 'Dynamic Programming',
                "name": 'House Robber II',
                "url": 'https://leetcode.com/problems/house-robber-ii/',
                "id": 12,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/6aEyTjOwlJU',
                "topics": 'Dynamic Programming',
                "name": 'Decode Ways',
                "url": 'https://leetcode.com/problems/decode-ways/',
                "id": 13,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/IlEsdxuD4lY',
                "topics": 'Dynamic Programming',
                "name": 'Unique Paths',
                "url": 'https://leetcode.com/problems/unique-paths/',
                "id": 14,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/Yan0cv2cLy8',
                "topics": 'Dynamic Programming',
                "name": 'Jump Game',
                "url": 'https://leetcode.com/problems/jump-game/',
                "id": 15,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/mQeF6bN8hMk',
                "topics": 'Graph',
                "name": 'Clone Graph',
                "url": 'https://leetcode.com/problems/clone-graph/',
                "id": 16,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/EgI5nU9etnU',
                "topics": 'Graph',
                "name": 'Course Schedule',
                "url": 'https://leetcode.com/problems/course-schedule/',
                "id": 17,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/s-VkcjHqkGI',
                "topics": 'Graph',
                "name": 'Pacific Atlantic Water Flow',
                "url": 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
                "id": 18,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/pV2kpPD66nE',
                "topics": 'Graph',
                "name": 'Number of Islands',
                "url": 'https://leetcode.com/problems/number-of-islands/',
                "id": 19,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/bXsUuownnoQ',
                "topics": 'Graph',
                "name": 'Graph Val"id" Tree (Leetcode Premium)',
                "url": 'https://leetcode.com/problems/graph-val"id"-tree/',
                "id": 20,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/8f1XPm4WOUc',
                "topics": 'Graph',
                "name": 'Number of Connected Components in an Undirected Graph (Leetcode Premium)',
                "url": 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/',
                "id": 21,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/44H3cEC2fFM',
                "topics": 'Interval',
                "name": 'Merge Intervals',
                "url": 'https://leetcode.com/problems/merge-intervals/',
                "id": 22,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/nONCGxWoUfM',
                "topics": 'Interval',
                "name": 'Non-overlapping Intervals',
                "url": 'https://leetcode.com/problems/non-overlapping-intervals/',
                "id": 23,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/FdzJmTCVyJU',
                "topics": 'Interval',
                "name": 'Meeting Rooms II (Leetcode Premium)',
                "url": 'https://leetcode.com/problems/meeting-rooms-ii/',
                "id": 24,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/XVuQxVej6y8',
                "topics": 'Linked List',
                "name": 'Remove Nth Node From End Of List',
                "url": 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
                "id": 25,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/S5bfdUTrKLM',
                "topics": 'Linked List',
                "name": 'Reorder List',
                "url": 'https://leetcode.com/problems/reorder-list/',
                "id": 26,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/T41rL0L3Pnw',
                "topics": 'Matrix',
                "name": 'Set Matrix Zeroes',
                "url": 'https://leetcode.com/problems/set-matrix-zeroes/',
                "id": 27,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/BJnMZNwUk1M',
                "topics": 'Matrix',
                "name": 'Spiral Matrix',
                "url": 'https://leetcode.com/problems/spiral-matrix/',
                "id": 28,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/fMSJSS7eO1w',
                "topics": 'Matrix',
                "name": 'Rotate Image',
                "url": 'https://leetcode.com/problems/rotate-image/',
                "id": 29,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/pfiQ_PS1g8E',
                "topics": 'Matrix',
                "name": 'Word Search',
                "url": 'https://leetcode.com/problems/word-search/',
                "id": 30,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/wiGpQwVHdE0',
                "topics": 'String',
                "name": 'Longest Substring Without Repeating Characters',
                "url": 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
                "id": 31,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/gqXU1UyA8pk',
                "topics": 'String',
                "name": 'Longest Repeating Character Replacement',
                "url": 'https://leetcode.com/problems/longest-repeating-character-replacement/',
                "id": 32,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/vzdNOK2oB2E',
                "topics": 'String',
                "name": 'Group Anagrams',
                "url": 'https://leetcode.com/problems/group-anagrams/',
                "id": 33,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/XYQecbcd6_c',
                "topics": 'String',
                "name": 'Longest Palindromic Substring',
                "url": 'https://leetcode.com/problems/longest-palindromic-substring/',
                "id": 34,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/4RACzI5-du8',
                "topics": 'String',
                "name": 'Palindromic Substrings',
                "url": 'https://leetcode.com/problems/palindromic-substrings/',
                "id": 35,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/B1k_sxOSgv8',
                "topics": 'String',
                "name": 'Encode and Decode Strings (Leetcode Premium)',
                "url": 'https://leetcode.com/problems/encode-and-decode-strings/',
                "id": 36,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/6ZnyEApgFYg',
                "topics": 'Tree',
                "name": 'Binary Tree Level Order Traversal',
                "url": 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
                "id": 37,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/ihj4IQGZ2zc',
                "topics": 'Tree',
                "name": 'Construct Binary Tree from Preorder and Inorder Traversal',
                "url": 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
                "id": 38,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/s6ATEkipzow',
                "topics": 'Tree',
                "name": 'Val"id"ate Binary Search Tree',
                "url": 'https://leetcode.com/problems/val"id"ate-binary-search-tree/',
                "id": 39,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/5LUXSvjmGCw',
                "topics": 'Tree',
                "name": 'Kth Smallest Element in a BST',
                "url": 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
                "id": 40,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/oobqoCJlHA0',
                "topics": 'Tree',
                "name": 'Implement Trie (Prefix Tree)',
                "url": 'https://leetcode.com/problems/implement-trie-prefix-tree/',
                "id": 41,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/BTf05gs_8iU',
                "topics": 'Tree',
                "name": 'Add and Search Word',
                "url": 'https://leetcode.com/problems/add-and-search-word-data-structure-design/',
                "id": 42,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/YPTqKIgVk-k',
                "topics": 'Heap',
                "name": 'Top K Frequent Elements',
                "url": 'https://leetcode.com/problems/top-k-frequent-elements/',
                "id": 43,
                "status": "pending"
            }
        ]

        hardArr = [
            {
                "solution": 'https://youtu.be/itmhHWaHupI',
                "topics": 'Heap',
                "name": 'Find Median from Data Stream',
                "url": 'https://leetcode.com/problems/find-median-from-data-stream/',
                "id": 0,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/asbcE9mZz_U',
                "topics": 'Tree',
                "name": 'Word Search II',
                "url": 'https://leetcode.com/problems/word-search-ii/',
                "id": 1,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/q5a5OiGbT6Q',
                "topics": 'Heap',
                "name": 'Merge K Sorted Lists',
                "url": 'https://leetcode.com/problems/merge-k-sorted-lists/',
                "id": 2,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/u4JAi2JJhI8',
                "topics": 'Tree',
                "name": 'Serialize and Deserialize Binary Tree',
                "url": 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
                "id": 3,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/Hr5cWUld4vU',
                "topics": 'Tree',
                "name": 'Binary Tree Maximum Path Sum',
                "url": 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
                "id": 4,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/jSto0O4AJbM',
                "topics": 'String',
                "name": 'Minimum Window Substring',
                "url": 'https://leetcode.com/problems/minimum-window-substring/',
                "id": 5,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/q5a5OiGbT6Q',
                "topics": 'Linked List',
                "name": 'Merge K Sorted Lists',
                "url": 'https://leetcode.com/problems/merge-k-sorted-lists/',
                "id": 6,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/P6RZZMu_maU',
                "topics": 'Graph',
                "name": 'Longest Consecutive Sequence',
                "url": 'https://leetcode.com/problems/longest-consecutive-sequence/',
                "id": 7,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/6kTZYvNNyps',
                "topics": 'Graph',
                "name": 'Alien Dictionary (Leetcode Premium)',
                "url": 'https://leetcode.com/problems/alien-dictionary/',
                "id": 8,
                "status": "pending"
            },
            {
                "solution": 'https://youtu.be/A8NUOmlwOlM',
                "topics": 'Interval',
                "name": 'Insert Interval',
                "url": 'https://leetcode.com/problems/insert-interval/',
                "id": 9,
                "status": "pending"
            }
        ]

        var all = [easyArr, mediumArr, hardArr]

        var every = JSON.stringify(all)
        localStorage.setItem('every', every)

        // console.log('Data not found in local storage : setting in localstorage', every)
    }


    let easyLen = easyArr.length
    const easyDiv = document.querySelector('.easy-body')

    for (let i = 0; i < easyLen; i++) {
        let newDiv = document.createElement('div')

        let name = easyArr[i].name
        let url = easyArr[i].url
        let solution = easyArr[i].solution
        let status = easyArr[i].status

        let selectDiv = document.createElement('select')
        selectDiv.classList.add('select-status')

        if (status === 'pending') {
            selectDiv.appendChild(givePendingOption())
            selectDiv.appendChild(giveRevisitOption())
            selectDiv.appendChild(giveDoneOption())
        }

        else if (status === 'revisit') {
            selectDiv.appendChild(giveRevisitOption())
            selectDiv.appendChild(givePendingOption())
            selectDiv.appendChild(giveDoneOption())
        }

        else {
            selectDiv.appendChild(giveDoneOption())
            selectDiv.appendChild(givePendingOption())
            selectDiv.appendChild(giveRevisitOption())
        }

        let resSelectDiv = selectDiv.outerHTML

        let innerDiv = document.createElement('div')
        innerDiv.innerHTML = '<div class="action"> ' + resSelectDiv + ' </div><div class="temp"> <div class="link"><a class="problem_name" href=" ' + url + '" target="_blank">' + name + '</a></div><div class="problem_info"><div class="solution"><a href="' + solution + '" target="_blank"><i class="fab fa-youtube"></i></a></div></div></div>'

        let outerDiv = document.createElement('div')
        outerDiv.classList.add('each_problem')
        outerDiv.classList.add('easy_box')

        if (status === 'pending') {
            outerDiv.classList.add('pending')
        }
        else if (status === 'revisit') {
            outerDiv.classList.add('revisit')
        }
        else if (status === 'done') {
            outerDiv.classList.add('done')
        }
        outerDiv.id = i

        outerDiv.appendChild(innerDiv)

        easyDiv.appendChild(outerDiv)
    }


    let mediumLen = mediumArr.length
    const mediumDiv = document.querySelector('.medium-body')

    for (let i = 0; i < mediumLen; i++) {
        let newDiv = document.createElement('div')

        let name = mediumArr[i].name
        let url = mediumArr[i].url
        let solution = mediumArr[i].solution
        let status = mediumArr[i].status

        let selectDiv = document.createElement('select')
        selectDiv.classList.add('select-status')

        if (status === 'pending') {
            selectDiv.appendChild(givePendingOption())
            selectDiv.appendChild(giveRevisitOption())
            selectDiv.appendChild(giveDoneOption())
        }

        else if (status === 'revisit') {
            selectDiv.appendChild(giveRevisitOption())
            selectDiv.appendChild(givePendingOption())
            selectDiv.appendChild(giveDoneOption())
        }

        else {
            selectDiv.appendChild(giveDoneOption())
            selectDiv.appendChild(givePendingOption())
            selectDiv.appendChild(giveRevisitOption())
        }

        let resSelectDiv = selectDiv.outerHTML

        let innerDiv = document.createElement('div')
        innerDiv.innerHTML = '<div class="action"> ' + resSelectDiv + ' </div><div class="temp"> <div class="link"><a class="problem_name" href=" ' + url + '" target="_blank">' + name + '</a></div><div class="problem_info"><div class="solution"><a href="' + solution + '" target="_blank"><i class="fab fa-youtube"></i></a></div></div></div>'

        let outerDiv = document.createElement('div')
        outerDiv.classList.add('each_problem')
        outerDiv.classList.add('medium_box')
        if (status === 'pending') {
            outerDiv.classList.add('pending')
        }
        else if (status === 'revisit') {
            outerDiv.classList.add('revisit')
        }
        else if (status === 'done') {
            outerDiv.classList.add('done')
        }
        outerDiv.id = i

        outerDiv.appendChild(innerDiv)

        mediumDiv.appendChild(outerDiv)
    }


    let hardLen = hardArr.length
    const hardSectionDiv = document.querySelector('.hard-body')

    for (let i = 0; i < hardLen; i++) {
        let newDiv = document.createElement('div')

        let name = hardArr[i].name
        let url = hardArr[i].url
        let solution = hardArr[i].solution
        let status = hardArr[i].status

        let selectDiv = document.createElement('select')
        selectDiv.classList.add('select-status')

        if (status === 'pending') {
            selectDiv.appendChild(givePendingOption())
            selectDiv.appendChild(giveRevisitOption())
            selectDiv.appendChild(giveDoneOption())
        }

        else if (status === 'revisit') {
            selectDiv.appendChild(giveRevisitOption())
            selectDiv.appendChild(givePendingOption())
            selectDiv.appendChild(giveDoneOption())
        }

        else {
            selectDiv.appendChild(giveDoneOption())
            selectDiv.appendChild(givePendingOption())
            selectDiv.appendChild(giveRevisitOption())
        }

        let resSelectDiv = selectDiv.outerHTML

        let innerDiv = document.createElement('div')
        innerDiv.innerHTML = '<div class="action"> ' + resSelectDiv + ' </div><div class="temp"> <div class="link"><a class="problem_name" href=" ' + url + '" target="_blank">' + name + '</a></div><div class="problem_info"><div class="solution"><a href="' + solution + '" target="_blank"><i class="fab fa-youtube"></i></a></div></div></div>'

        let outerDiv = document.createElement('div')
        outerDiv.classList.add('each_problem')
        outerDiv.classList.add('hard_box')

        if (status === 'pending') {
            outerDiv.classList.add('pending')
        }
        else if (status === 'revisit') {
            outerDiv.classList.add('revisit')
        }
        else if (status === 'done') {
            outerDiv.classList.add('done')
        }
        outerDiv.id = i

        outerDiv.appendChild(innerDiv)

        hardSectionDiv.appendChild(outerDiv)
    }

}


window.onload = () => {
    loadData()

    // console.log('data loading done')

    // On changing the select status of any problem
    let selectElements = document.querySelectorAll('.select-status')


    selectElements.forEach((elem) => {
        elem.addEventListener('change', (event) => {
            var status = elem.value
            // console.log(status)

            var parentDiv = event.target.closest('.each_problem')
            console.log(parentDiv)
            console.log(typeof (parentDiv))

            if (status === 'revisit') {
                parentDiv.classList.remove('pending')
                parentDiv.classList.remove('done')
                parentDiv.classList.add('revisit')
            }

            else if (status === 'done') {
                parentDiv.classList.remove('revisit')
                parentDiv.classList.remove('pending')
                parentDiv.classList.add('done')
            }

            else {
                parentDiv.classList.remove('revisit')
                parentDiv.classList.remove('done')
                parentDiv.classList.add('pending')
            }

            var isEasy = event.target.closest('.easy_box')
            var isMedium = event.target.closest('.medium_box')
            var isHard = event.target.closest('.hard_box')

            if (isEasy) {
                // console.log('easy problem found')
                var parentId = parentDiv.id
                // console.log(parentId)

                var res = localStorage.getItem('every')
                var everyRes = JSON.parse(res)

                var easyArr = everyRes[0]
                easyArr[parentId].status = status

                var all = [easyArr, everyRes[1], everyRes[2]]

                var every = JSON.stringify(all)
                localStorage.setItem('every', every)

                // console.log('Updated easy status stored back to localstorage')
            }

            else if (isMedium) {
                // console.log('medium problem found')
                var parentId = parentDiv.id
                // console.log(parentId)

                var res = localStorage.getItem('every')
                var everyRes = JSON.parse(res)

                var mediumArr = everyRes[1]
                mediumArr[parentId].status = status

                var all = [everyRes[0], mediumArr, everyRes[2]]

                var every = JSON.stringify(all)
                localStorage.setItem('every', every)
            }

            else if (isHard) {
                // console.log('hard problem found')
                var parentId = parentDiv.id
                // console.log(parentId)

                var res = localStorage.getItem('every')
                var everyRes = JSON.parse(res)

                var hardArr = everyRes[2]
                hardArr[parentId].status = status

                var all = [everyRes[0], everyRes[1], hardArr]

                var every = JSON.stringify(all)
                localStorage.setItem('every', every)
            }
        })
    })
}