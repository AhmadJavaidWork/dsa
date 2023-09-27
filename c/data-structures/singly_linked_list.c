#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>

#define ARROW_SIZE 5;

typedef struct Node
{
  int value;
  struct Node *next;
} Node;

typedef struct SinglyLinkedList
{
  Node *head;
  Node *tail;
  int length;
} SinglyLinkedList;

Node *create_node(int value)
{
  Node *new_node = (Node *)malloc(sizeof(Node));
  assert(new_node != NULL);
  new_node->value = value;
  new_node->next = NULL;
  return new_node;
}

void validate_index(int length, int index)
{
  assert(index > -1);
  assert(index <= length);
}

Node *traverse_to_index(SinglyLinkedList *list, int index)
{
  validate_index(list->length, index);

  Node *curr = list->head;
  int counter = 0;

  while (counter < index)
  {
    curr = curr->next;
    counter++;
  }
  return curr;
}

void append(SinglyLinkedList *list, int value)
{
  Node *new_node = create_node(value);

  if (list->head == NULL)
  {
    list->head = list->tail = new_node;
  }
  else
  {
    list->tail->next = new_node;
    list->tail = new_node;
  }
  list->length++;
}

void prepend(SinglyLinkedList *list, int value)
{
  Node *new_node = create_node(value);

  if (list->head == NULL)
  {
    list->head = list->tail = new_node;
  }
  else
  {
    new_node->next = list->head;
    list->head = new_node;
  }
  list->length++;
}

void insert_at(SinglyLinkedList *list, int index, int value)
{
  validate_index(list->length, index);

  if (index == 0)
  {
    return prepend(list, value);
  }
  else if (index == list->length)
  {
    return append(list, value);
  }

  Node *new_node = create_node(value);
  Node *parent = traverse_to_index(list, index - 1);
  new_node->next = parent->next;
  parent->next = new_node;
  list->length++;
}

int get_at(SinglyLinkedList *list, int index)
{
  assert(list->length > 0);

  Node *node = traverse_to_index(list, index);
  return node->value;
}

int pop(SinglyLinkedList *list)
{
  assert(list->length > 0);

  Node *node = list->tail;
  if (list->length == 1)
  {
    list->head = list->tail = NULL;
  }
  else
  {
    Node *parent = traverse_to_index(list, list->length - 2);
    list->tail = parent;
    list->tail->next = NULL;
  }
  list->length--;
  int value = node->value;
  free(node);
  return value;
}

int remove_at(SinglyLinkedList *list, int index)
{
  validate_index(list->length, index);

  Node *node = NULL;
  if (index == 0)
  {
    node = list->head;
    if (list->length == 1)
    {
      list->head = list->tail = NULL;
    }
    else
    {
      list->head = node->next;
    }
  }
  else
  {
    Node *parent = traverse_to_index(list, index - 1);
    node = parent->next;
    parent->next = node->next;
  }
  list->length--;
  int value = node->value;
  free(node);
  return value;
}

void reverse(SinglyLinkedList *list)
{
  if (list->length < 2)
    return;

  Node *curr = list->head;
  Node *prev = NULL;
  Node *next = curr->next;

  while (next)
  {
    curr->next = prev;
    prev = curr;
    curr = next;
    next = next->next;
    if (next == NULL)
    {
      list->tail = list->head;
      list->head = curr;
      curr->next = prev;
    }
  }
}

int memory_to_be_alloc_for_printing(SinglyLinkedList *list)
{
  Node *curr = list->head;
  int total_list_value_length = snprintf(NULL, 0, "%d", curr->value);

  while (curr->next != NULL)
  {
    curr = curr->next;
    total_list_value_length = total_list_value_length + snprintf(NULL, 0, "%d", curr->value) + ARROW_SIZE;
    if (!curr->next)
    {
      total_list_value_length -= ARROW_SIZE;
    }
  }

  return total_list_value_length;
}

void print(SinglyLinkedList *list)
{
  if (list->head == NULL)
  {
    printf("[]\n");
    return;
  }

  Node *curr = list->head;

  int total_string_length = memory_to_be_alloc_for_printing(list);
  char *list_values = (char *)malloc(total_string_length);
  assert(list_values != NULL);
  snprintf(list_values, total_string_length, "%d", curr->value);

  while (curr->next != NULL)
  {
    curr = curr->next;
    int temp_string_length = snprintf(NULL, 0, "%d", curr->value);
    char *temp = (char *)malloc(temp_string_length + 1);
    assert(temp != NULL);

    strcat(list_values, " -> ");
    snprintf(temp, temp_string_length + 1, "%d", curr->value);
    strcat(list_values, temp);
    free(temp);
  }

  printf("[%s]\n", list_values);
  free(list_values);
}

void free_linked_list(SinglyLinkedList *list)
{
  assert(list->length > 0);

  Node *curr = list->head;
  Node *next = curr->next;

  while (curr)
  {
    free(curr);
    curr = next;
    if (curr != NULL)
    {
      next = next->next;
    }
  }
}

int main(void)
{
  SinglyLinkedList list = {
      .head = NULL,
      .tail = NULL,
      .length = 0,
  };
  append(&list, 10);
  append(&list, 12);
  append(&list, 13);
  append(&list, 14);
  append(&list, 15);
  prepend(&list, 9);
  insert_at(&list, 2, 11);
  pop(&list);
  insert_at(&list, 6, 15);
  printf("%d\n", get_at(&list, 6));
  reverse(&list);
  print(&list);
  free_linked_list(&list);
  return 0;
}