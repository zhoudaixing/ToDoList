import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";
// import InboxIcon from "@mui/icons-material/Inbox";
// import DraftsIcon from "@mui/icons-material/Drafts";

import useStore from "@/store";
const ListPage = () => {
  // const { deleteItem } = useStore();

  const { list, deleteItem, finishList, finishItem } = useStore();
  console.log(list);
  const onClick = (id: number) => {
    finishItem(id);
  };
  const onDelete = (id: number, list: 'finishList') => {
    deleteItem(id, list)
  }
  return (
    <div className="p-4">
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            {list.map((item) => (
              <ListItem onClick={() => onClick(item.id)}>
                {item.content}
              </ListItem>
            ))}
          </List>
          <div className="bg-blue-500 h-10" />
          <List>
          {finishList.map((item) => (
              <ListItem onClick={() => onDelete(item.id, 'finishList')}>
                {item.content}
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </div>
  );
};

export default ListPage;
