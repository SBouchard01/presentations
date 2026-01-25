# This is a first slide

### For a test presentation


---

## Overview

1. [Some element](#/2/)
2. [Another element](#/3/)
3. [Final element](#/4/)

--

> This is a simple presentation to demonstrate the use of Reveal.js with Jekyll.

---

## First Section

--

This is the first section.

--

# ⚠️ Red background !

<background>#E55B3D</background> 

--

This is a slide with fragments.

+ First fragment
+ Second fragment
+ Third fragment

--

> h4 headers are way bigger than they should be! (for emojis)

#### 🧐

--

> Code is highlighted:

```python
def func(a):
    b = e = 0.7
    c = 1.0 - b
    d = 0.0
    g = (1 + a)
    x = b**2
    y = c * g**3 + d * g**2 + e

    return np.sqrt(x * y)
```

---

## Second Section

--

> We add a git graph trough mermaid[$^1$](#/5/1):

<mermaid>
gitGraph
       commit id: "1"
       commit id: "2"
       branch critical_density
       checkout critical_density
       commit id: "3"
       checkout main
       merge critical_density id: "merge"
</mermaid>
<!-- .element: style="height: 200px;" -->


> *This is a very small text.
<!-- .element: style="font-size: 50%;" -->


---

## Third Section

--

This is a table ! [$^2$](#/5/2)

|                     | GitHub | GitLab |
| ------------------- | ------ | ------ |
| Free                | ✅      | ✅      |
| Forking             | ✅      | ✅      |
| Mirroring           | ✅      | ⭐️      |
| Pages               | ✅      | ✅      |
| CI/CD               | ⭐️      | ✅      |
| Wiki                | ✅      | ⭐️      |
| Discussions         | ✅      | ❌      |
| Issue boards        | ✅      | ⭐️      |
| Pull/Merge requests | ✅      | ✅      |
| Containers          | ✅      | ✅      |
<!-- .element: style="font-size: 60%;" -->

---

## Footnotes


1. `<code>` blocks are parsed in mermaid blocks if an empty line is added somewhere before it.

<mermaid>
flowchart TD
    A[Start] --> B{<code>This is code without an empty line since the beginning of the graph</code>}
    
    B -- Yes --> C[<code>I added an empty line before this code</code>]
    B -- No --> D[Check the code]
    D --> B
</mermaid>

[Return to slide 3.](#/3/2)

--

1. This is a footnote example.

[Return to slide 2.](#/4/2)