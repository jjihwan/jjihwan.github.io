# Portfolio Admin Page

A web-based admin interface for editing your portfolio data files.

## Files
- `admin.html` - The main admin interface
- `components/data/*.json` - JSON data files

## Usage

### Quick Start
1. Open `admin.html` directly in any browser
2. Select a file from dropdown menu
3. Edit content using forms
4. Click "Download File" to download the modified JSON file
5. Replace the file in `components/data/` folder
6. Commit and push to GitHub

**How it works:**
- Files are loaded directly from GitHub (no server needed)
- Changes are downloaded as `.json` files
- Manually replace files in your repository

## Features

### Supported Files
- **education.json** - Academic credentials
- **experience.json** - Work history
- **news.json** - News and updates
- **profile.json** - Personal information
- **publications.json** - Research papers

### Editing Features
- Add new items to arrays
- Edit existing items
- Delete items
- Reorder items (move up/down)
- Array field management (add/remove items)

### Text Formatting
- **Bold**: Select text and click the **B** button to wrap it in `<b>` tags
- **Links**: Click the 🔗 Link button to insert formatted links with optional "open in new tab" setting

### Fields Support
- Text inputs for single values
- Textareas for longer content
- Array fields (e.g., authors, responsibilities, bio)
- Nested object fields (e.g., dateRange, links)

## Tips
- Use the Link button for consistent link formatting
- Bold text will be rendered with `<b>` tags
- Array items can be reordered using the arrow buttons
- Downloaded files must be committed to GitHub to take effect

## Workflow
1. Open admin.html in a browser
2. Select a file to edit
3. Make changes
4. Click "Download File" - this downloads the `.json` file
5. Replace the file in `components/data/` folder
6. Commit and push to GitHub

## Data Format

All data files are now in JSON format:
- No TypeScript type annotations
- No import statements
- No export declarations
- Pure JSON data

Example format:
```json
[
  {
    "name": "Jihwan Kim",
    "title": "Example"
  }
]
```


