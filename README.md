# ⭐ Starability Component
A customizable star rating component built with React.

## 🚀 Installation
Follow these steps to install and use the Starability component in your project.

### **1. Clone the Repository**
```bash
git clone https://github.com/Bhabin-Chudal/star_rating.git
cd star_rating
```

### **2. Install Dependencies**
```bash
npm install
```

---

## ⭐ Star Rating Example
Here’s how the **rating stars** would look:

---

⭐ ⭐ ⭐ ⭐ ⭐ 
(5 Stars)
---
⭐ ⭐ ⭐ ⭐ ☆ (4 Stars)
---

⭐ ⭐ ⭐ ☆ ☆ (3 Stars)
---

⭐ ⭐ ☆ ☆ ☆ (2 Stars)
---
⭐ ☆ ☆ ☆ ☆ (1 Star)
---


## ⚙️ Using the Starability Component
The `Starability` component takes the following props:

### **📌 Props**
| Prop            | Type     | Description |
|---------------|---------|-------------|
| `onSetRating`  | function | Required: A state setter function to extract the rating number. **Must be passed** to capture user rating. |
| `color`        | string   | Optional: Defines the color of the stars. Default: `#FFD700` (Gold). |
| `fontSize`     | string   | Optional: Determines the size of the stars (e.g., `24px`, `2rem`). Default: `24px`. |
| `defaultRating` | number   | Optional: Sets the default selected rating. Default: `2`. |

### **🛠 Example Usage**
```jsx
import React, { useState } from "react";
import Starability from "./Starability";

function App () => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h2>Your Rating: {rating}</h2>
      <Starability 
        onSetRating={setRating} 
        color="blue" 
        fontSize="30px" 
        defaultRating={3} 
      />
    </div>
  );
};

export default App;
```

---

## 📜 Notes
- **Passing `onSetRating` is essential**; otherwise, you won't be able to capture the rating value.
- The component is fully customizable via props (`color`, `fontSize`, `defaultRating`).
e
